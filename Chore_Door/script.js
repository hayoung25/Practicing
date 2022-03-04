let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

let isBot = (door) => {
    if(door.src===botDoorPath){
        return true;
    }else{
        return false;
    }
};

const isClicked = (door) => {
    if(door.src===closedDoorPath){
        return false;
    }else{
        return true;
    };
};

const playDoor = (door) => {
    numClosedDoors--;
    console.log(numClosedDoors);
    console.log(isBot(door));
    if(numClosedDoors===0) {
        gameOver("win");
    }else if(isBot(door)===true){
        gameOver("no")
    };
};

let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor===0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if(choreDoor===1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else{
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    };
    // console.log(openDoor1);
    // console.log(openDoor2);
    // console.log(openDoor3);
};   

door1.onclick = () => {
    if(!isClicked(door1)&&currentlyPlaying===true){
        door1.src = openDoor1;
        playDoor(door1)
    }
};

door2.onclick = () => {
    if(!isClicked(door2)&&currentlyPlaying===true){
        door2.src = openDoor2;
        playDoor(door2)
    }
}; 

door3.onclick = () => {
    if(!isClicked(door3)&&currentlyPlaying===true){
        door3.src = openDoor3;
        playDoor(door3)
    }
};

let startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!" 
    currentlyPlaying = true;
    randomChoreDoorGenerator();
} 

startButton.onclick = () => {
    if(currentlyPlaying===false){
        startRound()
    };
}

let gameOver = (status) => {
    if(status==="win"){
        startButton.innerHTML = 'You win! Play again?'
    }else{
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
};

startRound()



