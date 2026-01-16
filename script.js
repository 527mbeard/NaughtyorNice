function getPoints(value){
    switch(value){
        case 'nice':
            return 1;
        case 'naughty':
            return -1;
        default:
            return -1;
    }
}

function checkNaughtyOrNice(){
    const q1 = document.getElementById('q1').value
    const q2 = document.getElementById('q2').value
    const q3 = document.getElementById('q3').value
    const q4 = document.getElementById('q4').value
    const q5 = document.getElementById('q5').value

    const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5);

    if (score > 2.5){
    //     showNiceResult();
    // }else{
    //     showNaughtyResult();
    }
}

function showNiceResult(){
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: linear-gradient(135deg, #1a472a 0%, #0d2e1f 100%);
        border: 4px solid #ffd700;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        color: white;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        animation: popIn 0.5s ease;
    `;
    
    content.innerHTML = `
        <h1 style="font-size: 3rem; color: #28a745; margin-bottom: 20px;">🎄 YOU'RE ON THE NICE LIST! 🎄</h1>
        <p style="font-size: 1.5rem; color: #ffd700; margin: 20px 0;">✨ Congratulations! ✨</p>
        <p style="font-size: 1.2rem; margin: 20px 0;">Santa has you on the NICE list! 🎅</p>
        <p style="font-size: 1.1rem; margin: 20px 0;">You've been very good this year!</p>
        <p style="font-size: 1rem; margin: 30px 0; color: #ffd700;">🎁 Your presents are guaranteed to be awesome! 🎁</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: #28a745;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1rem;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 20px;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='#20c997'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#28a745'; this.style.transform='scale(1)'">
            Close
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function showNaughtyResult(){
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: linear-gradient(135deg, #1a472a 0%, #0d2e1f 100%);
        border: 4px solid #ffd700;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        color: white;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        animation: popIn 0.5s ease;
    `;
    
    content.innerHTML = `
        <h1 style="font-size: 3rem; color: #dc3545; margin-bottom: 20px;">⚠️ YOU'RE ON THE NAUGHTY LIST! ⚠️</h1>
        <p style="font-size: 1.5rem; color: #ffd700; margin: 20px 0;">Oh No! 😅</p>
        <p style="font-size: 1.2rem; margin: 20px 0;">Santa's watching you! 👀</p>
        <p style="font-size: 1.1rem; margin: 20px 0;">You've been a little naughty this year...</p>
        <p style="font-size: 1rem; margin: 30px 0; color: #ffd700;">But there's still time to be nice! 🤶</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: #dc3545;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1rem;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 20px;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='#ff6b6b'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#dc3545'; this.style.transform='scale(1)'">
            Close
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}