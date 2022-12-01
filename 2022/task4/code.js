function f1() {
	let board = document.querySelector('.board');
    let block;
    let flag = true;

	for(let i = 0; i < 8; i++){
        
        for(let j = 0; j < 8; j++){
            
            if(j == 0)
                flag = !flag;     
            
            block = document.createElement('div');
        
            if(flag)
				block.className = 'block black';

            else
                block.className = 'block white';

            if (i == 1 || i == 6)  {
                let peshka = document.createElement("img");
                peshka.src = "images/1.png";
                block.append(peshka);
            }

            if ((i == 0 || i == 7) && (j == 0 || j == 7)) {
                let ladyua = document.createElement("img")
                ladyua.src = "images/5.png";
                block.append(ladyua);
            }

            if ((i == 0 || i == 7) && (j == 1 || j == 6)) {
                let horse = document.createElement("img")
                horse.src = "images/6.png";
                block.append(horse);
            }

            if ((i == 0 || i == 7) && (j == 2 || j == 5)) {
                let elephant = document.createElement("img")
                elephant.src = "images/2.png";
                block.append(elephant);
            }

            if ((i == 0 && j == 3) || (i == 7 && j == 4)) {
                let king = document.createElement("img")
                king.src = "images/3.png";
                block.append(king);
            }

            if ((i == 0 && j == 4) || (i == 7 && j == 3)) {
                let queen = document.createElement("img")
                queen.src = "images/4.png";
                block.append(queen);
            }
            
            board.appendChild(block);
			
            flag = !flag;
        }
    }
}