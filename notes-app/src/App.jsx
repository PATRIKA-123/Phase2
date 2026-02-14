import { useState, useEffect } from 'react'

const linkRegex = /\[\[([^\]]+)\]\]/g

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('notes')
      if (saved) setTask(JSON.parse(saved))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(task))
    } catch (e) {
      // ignore
    }
  }, [task])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
    if (selectedNote === idx) setSelectedNote(null)
  }

  const openNoteByTitle = (noteTitle) => {
    const target = (noteTitle || '').trim().toLowerCase()
    const idx = task.findIndex(n => (n.title || '').trim().toLowerCase() === target)
    if (idx !== -1) setSelectedNote(idx)
  }

  const getBacklinks = (targetTitle) => {
    const backlinks = []
    const target = (targetTitle || '').trim().toLowerCase()
    task.forEach((n, i) => {
      const text = (n.title || '') + '\n' + (n.details || '')
      let m
      while ((m = linkRegex.exec(text)) !== null) {
        if ((m[1] || '').trim().toLowerCase() === target) backlinks.push({ idx: i, title: n.title })
      }
    })
    return backlinks
  }

  const renderWithLinks = (text) => {
    if (!text) return null
    const parts = []
    let lastIndex = 0
    let match
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      const linkedTitle = match[1]
      parts.push(
        <button key={parts.length + '_' + linkedTitle} onClick={() => openNoteByTitle(linkedTitle)} className='text-blue-600 underline'>
          {linkedTitle}
        </button>
      )
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex))

    return parts.map((p, i) => typeof p === 'string' ? <span key={i}>{p}</span> : <span key={i}>{p}</span>)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here (use [[Note Title]] to link)'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            const backlinkCount = getBacklinks(elem.title).length
            return <div onClick={() => setSelectedNote(idx)} key={idx} className=" cursor-pointer flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              {backlinkCount > 0 && <div className='absolute top-2 right-2 bg-yellow-300 text-black text-xs px-2 py-0.5 rounded-full font-semibold'>{backlinkCount}</div>}
              <div>
                <h3 className='leading-tight text-lg font-bold'>{renderWithLinks(elem.title)}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{renderWithLinks(elem.details)}</p>
              </div>
              <button onClick={(e) => { e.stopPropagation(); deleteNote(idx) }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>

      {selectedNote !== null && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-6'>
          <div className='bg-white text-black rounded-lg w-11/12 max-w-2xl p-6'>
            <div className='flex justify-between items-start'>
              <h2 className='text-2xl font-bold'>{task[selectedNote].title}</h2>
              <div className='flex gap-2'>
                <button onClick={() => { setSelectedNote(null) }} className='px-3 py-1 rounded bg-gray-200'>Close</button>
              </div>
            </div>
            <div className='mt-4 space-y-4'>
              <div className='prose max-w-none text-sm'>{renderWithLinks(task[selectedNote].details)}</div>

              <div>
                <h3 className='font-semibold'>Backlinks</h3>
                <ul className='list-disc list-inside'>
                  {getBacklinks(task[selectedNote].title).length === 0 && <li className='text-sm text-gray-600'>No backlinks</li>}
                  {getBacklinks(task[selectedNote].title).map(b => (
                    <li key={b.idx} className='text-sm'>
                      <button onClick={() => setSelectedNote(b.idx)} className='text-blue-600 underline'>{b.title || '(untitled)'}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
