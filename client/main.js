const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const jigsawBtn = document.getElementById("jigsawButton")
const trojanBtn = document.getElementById("trojanButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getJigsaw = () => {
    axios.get("http://localhost:4000/api/jigsaw/")
        .then(res => {
            const data = res.data;
            alert(data);

    });
};


const getTrojan= () => {
    axios.get("http://localhost:4000/api/trojan/")
        .then(res => {
            const data = res.data;
            alert(data);
    
    });
};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
jigsawBtn.addEventListener('click', getJigsaw)
trojanBtn.addEventListener('click', getTrojan)