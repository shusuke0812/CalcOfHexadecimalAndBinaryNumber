// 変数定義
var inputBin = 0
var inputDec = 0
var inputHex = 0

//let inputCalc = []
//let inputBinCalc = document.getElementById("js-inputBinCalc").value
//let inputHexCalc = document.getElementById("js-inputHexCalc").value

const tapBinBtn = document.getElementById("js-tapBinBtn")
const tapDecBtn = document.getElementById("js-tapDecBtn")
const tapHexBtn = document.getElementById("js-tapHexBtn")

// 変換 
// TODO:エラーハンドリング
// 2進数 -> 10進数・16進数
tapBinBtn.addEventListener('click', () => {
	inputBin = document.getElementById("js-inputBin").value;
	if (inputBin) {
		inputDec = parseInt(inputBin, 2);
		inputHex = inputDec.toString(16);
		document.getElementById("js-inputDec").value = inputDec;
		document.getElementById("js-inputHex").value = inputHex;
	}
	console.log("[DEBUG]Bin->Dec: ", inputDec);
	console.log("[DEBUG]Bin->Hex: ", inputHex);
})

// 10進数 -> 2進数・16進数
tapDecBtn.addEventListener('click', () => {
	inputDec = document.getElementById("js-inputDec").value;
	if (inputDec) {
		var ans = parseInt(inputDec);
		inputBin = ans.toString(2);
		inputHex = ans.toString(16);
		document.getElementById("js-inputBin").value = inputBin;
		document.getElementById("js-inputHex").value = inputHex;
	}
	console.log("[DEBUG]Dec->Bin: ", inputBin);
	console.log("[DEBUG]Dec->Hex: ", inputHex);
})

// 16進数 -> 2進数・10進数
tapHexBtn.addEventListener('click', () => {
	inputHex = document.getElementById("js-inputHex").value;
	if (inputHex) {
		inputDec = parseInt(inputHex, 16);
		inputBin = inputDec.toString(2);
		document.getElementById("js-inputDec").value = inputDec;
		document.getElementById("js-inputBin").value = inputBin;
	}
	console.log("[DEBUG]Hex->Dec: ", inputDec);
	console.log("[DEBUG]Hex->Bin: ", inputBin)
})
