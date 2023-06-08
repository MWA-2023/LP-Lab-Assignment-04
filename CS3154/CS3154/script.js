
const scheduleTable = document.querySelector('#schedule table');
const scheduleData = [
  { time: '09:00 AM', activity: 'Mohammad Fraz Speech' },
  { time: '10:00 AM', activity: 'Arsh Goel Speech' },
  { time: '11:00 AM', activity: 'Closing Ceremony' },
  
];

scheduleData.forEach(item => {
  const row = document.createElement('tr');
  const timeCell = document.createElement('td');
  const activityCell = document.createElement('td');
  timeCell.textContent = item.time;
  activityCell.textContent = item.activity;
  row.appendChild(timeCell);
  row.appendChild(activityCell);
  scheduleTable.appendChild(row);
});

const speakersSection = document.querySelector('#speakers');
const speakerData = [
  { name: 'Mohammad Fraz', topic: 'Speech about how to place in product based companies' },
  { name: 'Arsh Goel', topic: 'How to preapare for DSA and Interview' }
];

speakerData.forEach(item => {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('speaker');
  speakerDiv.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.topic}</p>
  `;
  speakersSection.appendChild(speakerDiv);
});

const registrationForm = document.querySelector('#registration');
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  console.log('Name:', name);
  console.log('Email:', email);

  alert('Registration successful!');
  registrationForm.reset();
});
