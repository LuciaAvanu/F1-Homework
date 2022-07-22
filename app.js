const mockData = [{
        firstName: 'Lewis',
        lastName: 'Hamilton',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LEWHAM01.png.transform/2col-retina/image.png',
        team: 'Mercedes',
        points: 109,
        image: 'https://i.ibb.co/Fs2XJFn/hamilton.png',
        country: 'United Kingdom',
        hex: '#6CD3BF'
    },
    {
        firstName: 'George',
        lastName: 'Russel',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GEORUS01.png.transform/2col-retina/image.png',
        team: 'Mercedes',
        points: 128,
        image: 'https://i.ibb.co/f4zt6Jq/russel.png',
        country: 'United Kingdom',
        hex: '#6CD3BF'
    },
    {
        firstName: 'Max',
        lastName: 'Verstappen',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MAXVER01.png.transform/2col-retina/image.png',
        team: 'Red Bull Racing',
        points: 208,
        image: 'https://i.ibb.co/BcBmc14/verstappen.png',
        country: 'Netherlands',
        hex: '#3671C6'
    },
    {
        firstName: 'Sergio',
        lastName: 'Perez',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SERPER01.png.transform/2col-retina/image.png',
        team: 'Red Bull Racing',
        points: 151,
        image: 'https://i.ibb.co/pRTZDMg/perez.png',
        country: 'Mexico',
        hex: '#3671C6'
    },
    {
        firstName: 'Lando',
        lastName: 'Norris',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANNOR01.png.transform/2col-retina/image.png',
        team: 'McLaren',
        points: 64,
        image: 'https://i.ibb.co/pRK4GW5/norris.png',
        country: 'United Kingdom',
        hex: '#3671C6'
    },
    {
        firstName: 'Daniel',
        lastName: 'Ricciardo',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/DANRIC01.png.transform/2col-retina/image.png',
        team: 'McLaren',
        points: 17,
        image: 'https://i.ibb.co/Jtbwrd0/ricardo.png',
        country: 'Australia',
        hex: '#3671C6'
    },
    {
        firstName: 'Fernando',
        lastName: 'Alonso',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/FERALO01.png.transform/2col-retina/image.png',
        team: 'Alpine',
        points: 29,
        image: 'https://i.ibb.co/jMLB0zJ/alonso.png',
        country: 'Spain',
        hex: '#2392D1'
    },
    {
        firstName: 'Esteban',
        lastName: 'Ocon',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/ESTOCO01.png.transform/2col-retina/image.png',
        team: 'Alpine',
        points: 52,
        image: 'https://i.ibb.co/QdDMyZv/ocon.png',
        country: 'France',
        hex: '#2392D1'
    },
    {
        firstName: 'Lance',
        lastName: 'Stroll',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANSTR01.png.transform/2col-retina/image.png',
        team: 'Aston Martin',
        points: 3,
        image: 'https://i.ibb.co/WgpkS4f/stroll.png',
        country: 'Canada',
        hex: '#358C75'
    },
    {
        firstName: 'Sebastian',
        lastName: 'Vettel',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SEBVET01.png.transform/2col-retina/image.png',
        team: 'Aston Martin',
        points: 15,
        image: 'https://i.ibb.co/xY4WYBc/vettel.png',
        country: 'Germany',
        hex: '#358C75'
    },
    {
        firstName: 'Charles',
        lastName: 'Leclerc',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CHALEC01.png.transform/2col-retina/image.png',
        team: 'Ferrari',
        points: 170,
        image: 'https://i.ibb.co/ZWm9cdX/leclerc.png',
        country: 'Monaco',
        hex: '#F91437'
    },
    {
        firstName: 'Carlos',
        lastName: 'Sainz',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CARSAI01.png.transform/2col-retina/image.png',
        team: 'Ferrari',
        points: 133,
        image: 'https://i.ibb.co/JRVmVw4/sainz.png',
        country: 'Spain',
        hex: '#F91437'
    },
    {
        firstName: 'Pierre',
        lastName: 'Gasly',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/PIEGAS01.png.transform/2col-retina/image.png',
        team: 'AlphaTauri',
        points: 16,
        image: 'https://i.ibb.co/R6nYsRj/gasly.png',
        country: 'France',
        hex: '#5E8FAA'
    },
    {
        firstName: 'Yuki',
        lastName: 'Tsunoda',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/YUKTSU01.png.transform/2col-retina/image.png',
        team: 'AlphaTauri',
        points: 11,
        image: 'https://i.ibb.co/x6VcZDs/tsunoda.png',
        country: 'Japan',
        hex: '#5E8FAA'
    },
    {
        firstName: 'Valtteri',
        lastName: 'Bottas',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/VALBOT01.png.transform/2col-retina/image.png',
        team: 'Alfa Romeo',
        points: 46,
        image: 'https://i.ibb.co/Qf0fBmX/bottas.png',
        country: 'Finland',
        hex: '#C92C4A'
    },
    {
        firstName: 'Guanyu',
        lastName: 'Zhou',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GUAZHO01.png.transform/2col-retina/image.png',
        team: 'Alfa Romeo',
        points: 5,
        image: 'https://i.ibb.co/9hQGWzV/zsou.png',
        country: 'China',
        hex: '#C92C4A'
    },
    {
        firstName: 'Mick',
        lastName: 'Schumacher',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MICSCH02.png.transform/2col-retina/image.png',
        team: 'Haas F1 Team',
        points: 12,
        image: 'https://i.ibb.co/yRntVLX/schumacher.png',
        country: 'Germany',
        hex: '#B7BBBD'
    },
    {
        firstName: 'Kevin',
        lastName: 'Magnussen',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/KEVMAG01.png.transform/2col-retina/image.png',
        team: 'Haas F1 Team',
        points: 22,
        image: 'https://i.ibb.co/27YnfXb/magnussen.png',
        country: 'Denmark',
        hex: '#B7BBBD'
    },
    {
        firstName: 'Nicholas',
        lastName: 'Latifi',
        number: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/NICLAF01.png.transform/2col-retina/image.png',
        team: 'Williams',
        points: 0,
        image: 'https://i.ibb.co/27mk9VC/latifi.png',
        country: 'Canada',
        hex: '#37BFDC'
    },
    {
        firstName: 'Alexander',
        lastName: 'Albon',
        number: 23,
        team: 'Williams',
        points: 3,
        image: 'https://i.ibb.co/M6RWgFd/albon.png',
        country: 'Thailand',
        hex: '#37BFDC'
    }
]

// sorting the array

mockData.sort(function(a, b) {
    return b.points - a.points;
});


// rendering in the DOM a card for each driver
let cardsContainer = document.querySelector('.cards-container')


for (let i = 0; i < mockData.length; i++) {
    let driverCard = document.createElement('div');
    driverCard.classList.add("driver-card");

    driverCard.addEventListener('mouseover', () => {
        driverCard.style = `border-color: ${mockData[i].hex}`
    });
    driverCard.addEventListener('mouseout', () => {
        driverCard.style = 'border-color: black'
    });




    driverCard.innerHTML = `
    <header>
    <div class="rank">${i + 1}</div>
    <div class="points">
    <button class="up-score"><img src="up-arrow.svg"></button>
    <div class="points-view">
        <div class="points-nr">${mockData[i].points}</div>
        <div class="pts">PTS</div>
        </div>
    </div>
</header>

<section class="name">
                    <div class="colored-line" style="background-color: ${mockData[i].hex}"></div>
                    <div class="driver-name">
                        <p>${mockData[i].firstName}</p>
                        <p>${mockData[i].lastName}</p>
                    </div>
                    <section class="flag">
                        <img src="https://www.formula1.com/content/dam/fom-website/flags/${mockData[i].country}.jpg.transform/2col-retina/image.jpg" alt="">
                    </section>
                </section>
                <div class="team-name">
                ${mockData[i].team}
            </div>
            <section class="driver-image-section">
            <div class="driver-number">
                <img src="${mockData[i].number}" alt="">
            </div>
            <img class="driver-img" src="${mockData[i].image}" alt="">
        </section>`


    let btn = driverCard.querySelector('.up-score');
    let pointsNr = driverCard.querySelector('.points-nr');
    let nrOfPoints = parseInt(pointsNr.innerHTML)
    btn.addEventListener('click', () => {
        nrOfPoints += 1;
        pointsNr.innerHTML = nrOfPoints;
    })



    cardsContainer.appendChild(driverCard);



}

// let btn = document.querySelector('.up-score')
// let pointsNr = document.querySelector('.points-nr');

// let nrOfPoints = parseInt(pointsNr.innerHTML)

// btn.addEventListener('click', () => {
//     nrOfPoints += 1;
//     pointsNr.innerHTML = nrOfPoints;
// })