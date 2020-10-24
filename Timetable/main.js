const linkInitializer = (subjectName, className, link) => {
    const Subject = document.querySelectorAll(className)
    let i = 0;
    while(i != Subject.length){
        Subject[i].innerHTML = `<a href="${link}"><span class="text-colors">${subjectName}</span></a>`;
        i+=1
    }
}



const Subjects = [
    {
        subjectName: 'Maths(18MAB201T)',
        className: '.Maths',
        link: "https://meet.google.com/lookup/b2kkluwnqh?authuser=5"
    },
    {
        subjectName: 'DSA(18CSC201J)', 
        className: '.DSA',
        link: 'https://meet.google.com/lookup/ceuk4t4wm2?authuser=5'
    },
    {
        subjectName: 'Analogue and Digital(18CSS201J)',
        className: '.AnaDigi',
        link: 'https://meet.google.com/lookup/avebesynxb?authuser=5'
    },
    {
        subjectName: 'Social Skills(18PDM201L)',
        className: '.SclSkills',
        link: 'https://meet.google.com/adv-megs-mrg?authuser=5'
    },
    {
        subjectName: 'Biology(18BTB101T)',
        className: '.Bio',
        link: 'https://meet.google.com/lookup/e5dmqdivyg?authuser=5'
    },
    {
        subjectName: 'Management Principles(18PDH102T)',
        className: '.MPE',
        link: 'https://meet.google.com/lookup/baj7tmjkth?authuser=5'
    },
    {
        subjectName: 'Computer Org. & Archt.(18CSC203J)',
        className: '.COA',
        link: 'https://meet.google.com/lookup/bqxjmtccyf?authuser=5'
    },
    {
        subjectName: 'OOPS(18CSC202J)',
        className: '.OOPS',
        link: 'https://meet.google.com/lookup/e3rj25ute5?authuser=5'
    }
]


for(let i = 0; i != Subjects.length; i+=1){
    linkInitializer(
        Subjects[i].subjectName,
        Subjects[i].className,
        Subjects[i].link
    )
}


// <!-- Analog & Digital Electronics:-https://meet.google.com/lookup/avebesynxb -->
// <!-- Mathematics:-https://meet.google.com/lookup/b2kkluwnqh -->
// <!-- Biology:-https://meet.google.com/lookup/e5dmqdivyg -->
// <!-- Data Structure & Algorithm:- -->
// <!-- https://meet.google.com/lookup/ceuk4t4wm2 -->
// <!-- Object Oriented Design and Programming:-https://meet.google.com/lookup/e3rj25ute5 -->
// <!-- Computer Organization & Architecture:- -->
// <!-- https://meet.google.com/lookup/bqxjmtccyf -->
// <!-- Management Principles for Engineers:-https://meet.google.com/lookup/baj7tmjkth -->
