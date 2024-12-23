// // import React, { useState, useEffect } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import './App.css';

// // const MoodTracker = () => {
// //   const [entryText, setEntryText] = useState('');
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [entries, setEntries] = useState(() => {
// //     const savedEntries = localStorage.getItem('journalEntries');
// //     return savedEntries ? JSON.parse(savedEntries) : [];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem('journalEntries', JSON.stringify(entries));
// //   }, [entries]);

// //   const handleAddEntry = async () => {
// //     if (!entryText.trim()) {
// //       alert('Please write something.');
// //       return;
// //     }

// //     const sentiment = await analyzeData(entryText || "I'm Good!");

// //     const newEntry = {
// //       id: Date.now(),
// //       text: entryText,
// //       date: selectedDate.toLocaleString(),
// //       sentiment,
// //     };

// //     setEntries((prevEntries) => [...prevEntries, newEntry]);
// //     setEntryText('');
// //   };

// //   const analyzeData = async (myFeelings) => {
// //     const mockSentiments = [
// //       'Sad', 'Happy', 'Confused', 'Disturbed', 'Demotivated', 'Happiness',
// //       'Excitement', 'Delight', 'Contentment', 'Amusement', 'Gratitude', 'Pride',
// //       'Serenity', 'Hope', 'Love', 'Affection', 'Compassion', 'Warmth', 'Tenderness',
// //       'Inspiration', 'Awe', 'Admiration', 'Enthusiasm', 'Relaxation', 'Peacefulness',
// //       'Satisfaction', 'Anger', 'Rage', 'Annoyance', 'Irritation', 'Resentment',
// //       'Sadness', 'Grief', 'Loneliness', 'Disappointment', 'Heartache', 'Despair',
// //       'Fear', 'Anxiety', 'Nervousness', 'Worry', 'Insecurity', 'Panic', 'Apprehension',
// //       'Disgust', 'Revulsion', 'Contempt', 'Loathing', 'Guilt', 'Shame', 'Regret',
// //       'Embarrassment', 'Humiliation', 'Curiosity', 'Surprise', 'Nostalgia', 'Longing',
// //       'Melancholy', 'Bittersweetness', 'Love-hate', 'Relief mixed with sadness', 
// //       'Hope mixed with fear'
// //     ];
// //     return mockSentiments[Math.floor(Math.random() * mockSentiments.length)];
// //   };

// //   const handleDeleteEntry = (id) => {
// //     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
// //   };

// //   const handleEditEntry = (id) => {
// //     const entryToEdit = entries.find((entry) => entry.id === id);
// //     setEntryText(entryToEdit.text);
// //     handleDeleteEntry(id);
// //   };

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   const entriesForSelectedDate = entries.filter((entry) =>
// //     new Date(entry.date).toLocaleDateString() === selectedDate.toLocaleDateString()
// //   );

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Mood Tracker</h1>
      
// //       <div style={{ marginBottom: '20px', maxWidth: '400px', margin: '0 auto' }}>
// //         <Calendar
// //           onChange={handleDateChange}
// //           value={selectedDate}
// //         />
// //       </div>

// //       <div style={{ margin: '20px 0' }}>
// //         <input
// //           type="text"
// //           value={entryText}
// //           onChange={(e) => setEntryText(e.target.value)}
// //           placeholder="Write your journal entry..."
// //           style={{ padding: '10px', width: '80%' }}
// //         />
// //         <button onClick={handleAddEntry} style={{ padding: '10px', marginLeft: '10px' }}>
// //           Add Entry
// //         </button>
// //       </div>

// //       <div>
// //         <h3>All Entries</h3>
// //         {entries.length === 0 ? (
// //           <p>No entries yet.</p>
// //         ) : (
// //           entries.map((entry) => (
// //             <div key={entry.id} className="entry" style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
// //               <p><strong>{entry.date}</strong></p>
// //               <p>{entry.text}</p>
// //               <p style={{ fontWeight: 'bold', color: '#555' }}>Sentiment: {entry.sentiment}</p>
// //               <div>
// //                 <button onClick={() => handleEditEntry(entry.id)} style={{ marginRight: '10px' }}>
// //                   Edit
// //                 </button>
// //                 <button onClick={() => handleDeleteEntry(entry.id)}>
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MoodTracker;


// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import '../App.css';

// const MoodTracker = () => {
//   const [entryText, setEntryText] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [entries, setEntries] = useState(() => {
//     const savedEntries = localStorage.getItem('journalEntries');
//     return savedEntries ? JSON.parse(savedEntries) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('journalEntries', JSON.stringify(entries));
//   }, [entries]);

//   const handleAddEntry = async () => {
//     if (!entryText.trim()) {
//       alert('Please write something.');
//       return;
//     }

//     const sentiment = await analyzeData(entryText || "I'm Good!");

//     const newEntry = {
//       id: Date.now(),
//       text: entryText,
//       date: selectedDate.toLocaleString(),
//       sentiment,
//     };

//     setEntries((prevEntries) => [...prevEntries, newEntry]);
//     setEntryText('');
//   };

//   const analyzeData = async (myFeelings) => {
//     const mockSentiments = ['Happy', 'Sad', 'Excited', 'Calm', 'Worried'];
//     return mockSentiments[Math.floor(Math.random() * mockSentiments.length)];
//   };

//   const handleDeleteEntry = (id) => {
//     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const entriesForSelectedDate = entries.filter((entry) =>
//     new Date(entry.date).toLocaleDateString() === selectedDate.toLocaleDateString()
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Mood Tracker</h1>
//       <div style={{ marginBottom: '20px' }}>
//         <Calendar onChange={handleDateChange} value={selectedDate} />
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={entryText}
//           onChange={(e) => setEntryText(e.target.value)}
//           placeholder="Write your journal entry..."
//           style={{ padding: '10px', width: '80%' }}
//         />
//         <button onClick={handleAddEntry} style={{ padding: '10px', marginLeft: '10px' }}>
//           Add Entry
//         </button>
//       </div>
//       <div>
//         <h3>Entries</h3>
//         {entriesForSelectedDate.map((entry) => (
//           <div key={entry.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//             <p><strong>{entry.date}</strong></p>
//             <p>{entry.text}</p>
//             <p>Sentiment: {entry.sentiment}</p>
//             <button onClick={() => handleDeleteEntry(entry.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;



// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';

// const MoodTracker = () => {
//   const [entryText, setEntryText] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [entries, setEntries] = useState(() => {
//     const savedEntries = localStorage.getItem('journalEntries');
//     return savedEntries ? JSON.parse(savedEntries) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('journalEntries', JSON.stringify(entries));
//   }, [entries]);

//   const handleAddEntry = async () => {
//     if (!entryText.trim()) {
//       alert('Please write something.');
//       return;
//     }

//     const sentiment = await analyzeData(entryText || "I'm Good!");

//     const newEntry = {
//       id: Date.now(),
//       text: entryText,
//       date: selectedDate.toLocaleString(),
//       sentiment,
//     };

//     setEntries((prevEntries) => [...prevEntries, newEntry]);
//     setEntryText('');
//   };

//   const analyzeData = async (myFeelings) => {
//     const mockSentiments = [
//       'Sad', 'Happy', 'Confused', 'Disturbed', 'Demotivated', 'Happiness',
//       'Excitement', 'Delight', 'Contentment', 'Amusement', 'Gratitude', 'Pride',
//       'Serenity', 'Hope', 'Love', 'Affection', 'Compassion', 'Warmth', 'Tenderness',
//       'Inspiration', 'Awe', 'Admiration', 'Enthusiasm', 'Relaxation', 'Peacefulness',
//       'Satisfaction', 'Anger', 'Rage', 'Annoyance', 'Irritation', 'Resentment',
//       'Sadness', 'Grief', 'Loneliness', 'Disappointment', 'Heartache', 'Despair',
//       'Fear', 'Anxiety', 'Nervousness', 'Worry', 'Insecurity', 'Panic', 'Apprehension',
//       'Disgust', 'Revulsion', 'Contempt', 'Loathing', 'Guilt', 'Shame', 'Regret',
//       'Embarrassment', 'Humiliation', 'Curiosity', 'Surprise', 'Nostalgia', 'Longing',
//       'Melancholy', 'Bittersweetness', 'Love-hate', 'Relief mixed with sadness', 
//       'Hope mixed with fear'
//     ];
//     return mockSentiments[Math.floor(Math.random() * mockSentiments.length)];
//   };

//   const handleDeleteEntry = (id) => {
//     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
//   };

//   const handleEditEntry = (id) => {
//     const entryToEdit = entries.find((entry) => entry.id === id);
//     setEntryText(entryToEdit.text);
//     handleDeleteEntry(id);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const entriesForSelectedDate = entries.filter((entry) =>
//     new Date(entry.date).toLocaleDateString() === selectedDate.toLocaleDateString()
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Mood Tracker</h1>
      
//       <div style={{ marginBottom: '20px', maxWidth: '400px', margin: '0 auto' }}>
//         <Calendar
//           onChange={handleDateChange}
//           value={selectedDate}
//         />
//       </div>

//       <div style={{ margin: '20px 0' }}>
//         <input
//           type="text"
//           value={entryText}
//           onChange={(e) => setEntryText(e.target.value)}
//           placeholder="Write your journal entry..."
//           style={{ padding: '10px', width: '80%' }}
//         />
//         <button onClick={handleAddEntry} style={{ padding: '10px', marginLeft: '10px' }}>
//           Add Entry
//         </button>
//       </div>

//       <div>
//         <h3>All Entries</h3>
//         {entries.length === 0 ? (
//           <p>No entries yet.</p>
//         ) : (
//           entries.map((entry) => (
//             <div key={entry.id} className="entry" style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
//               <p><strong>{entry.date}</strong></p>
//               <p>{entry.text}</p>
//               <p style={{ fontWeight: 'bold', color: '#555' }}>Sentiment: {entry.sentiment}</p>
//               <div>
//                 <button onClick={() => handleEditEntry(entry.id)} style={{ marginRight: '10px' }}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDeleteEntry(entry.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;