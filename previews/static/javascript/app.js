document.getElementById('confirm').addEventListener('click', () =>{
    const url = document.getElementById('request-url').value;
    fetch('http://localhost:8000/previews?url='+`${url}`).then((response) => response.json()).then((data) => {
        const table = document.getElementById('result-table');
        table.innerHTML = '';
        for (let i=0, max=Object.keys(data).length; i<max; i++) {
            const tr_1 = table.insertRow(-1);
            const td_1 = tr_1.insertCell(0);
            const td_2 = tr_1.insertCell(1);
            const link = document.createElement('a');
            const link_url = document.createTextNode(Object.values(data)[i]);
            const image = document.createElement('img');
            const image_url = document.createTextNode(Object.values(data)[i]);
            td_1.textContent = Object.keys(data)[i];
            if (Object.keys(data)[i].includes('html')) {
                const tr_2 = table.insertRow(-1);
                td_2.textContent = Object.values(data)[i];
                tr_2.insertCell(0).textContent = '';
                tr_2.insertCell(1).innerHTML = Object.values(data)[i];
            } else if ((Object.keys(data)[i].includes('thumbnail_url')) && !(Object.keys(data)[i].includes('button'))){
                const tr_2 = table.insertRow(-1);
                link.appendChild(link_url);
                link.href = Object.values(data)[i];
                image.appendChild(image_url);
                image.src = Object.values(data)[i];
                td_2.appendChild(link)
                tr_2.insertCell(0).textContent = '';
                tr_2.insertCell(1).appendChild(image);
            } else if (Object.keys(data)[i].includes('url')) {
                link.appendChild(link_url);
                link.href = Object.values(data)[i];
                td_2.appendChild(link);
            } else {
                td_2.textContent = Object.values(data)[i];
            }
        }
    })
}, false)