const contenedor = document.getElementById('personajes');

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res)=>res.json())
    .then(data=>data.results.forEach(personaje=>{
        const carta=document.createElement('div')
        carta.className='carta'

        carta.innerHTML=`
            <h2>Nombre</h2>
            <p>${personaje.name}</p>
            <h2>Habilidades</h2>
        `
        // console.log('https://pokeapi.co/api/v2/pokemon/'+personaje.name)
        fetch('https://pokeapi.co/api/v2/pokemon/'+personaje.name)
            .then((res2)=>res2.json())
            .then(data2=>data2.abilities.forEach(item=>{
                carta.innerHTML+=`
                    <p>${item.ability.name}</p>
                `
            }))


        contenedor.append(carta)
    }))

const contenedor2=document.getElementById('apilocal')

fetch('./data.json')
    .then((res)=>res.json())
    .then(elemento=>elemento.forEach((producto)=>{
        const carta2=document.createElement('div')
        carta2.className='carta2'

        carta2.innerHTML=`
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <p>${producto.marca}</p>
        `

        contenedor2.append(carta2)
    }))


