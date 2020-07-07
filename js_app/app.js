/**
 * 変数定義
 */
var inputBin = 0
var inputDec = 0
var inputHex = 0

var inputSum = 0
var outputAns = 0
var inputBinCalc = 0
var inputHexCalc = 0
var radioSelected = ""

const tapBinBtn = document.getElementById("js-tapBinBtn")
const tapDecBtn = document.getElementById("js-tapDecBtn")
const tapHexBtn = document.getElementById("js-tapHexBtn")

const tapOrBtn = document.getElementById("js-tapOrBtn")
const tapAndBtn = document.getElementById("js-tapAndBtn")
const tapNotBtn = document.getElementById("js-tapNotBtn")
const tapXorBtn = document.getElementById("js-tapXorBtn")
const tapAddBtn = document.getElementById("js-tapAddBtn")

/** 
 * 変換
 */

// TODO:エラーハンドリング
// 2進数 -> 10進数・16進数
tapBinBtn.addEventListener('click', () => {
	inputBin = document.getElementById("js-inputBin").value
	if (inputBin) {
		inputDec = parseInt(inputBin, 2)
		inputHex = inputDec.toString(16)
		document.getElementById("js-inputDec").value = inputDec
		document.getElementById("js-inputHex").value = inputHe
	}
	console.log("[DEBUG]Bin->Dec: ", inputDec)
	console.log("[DEBUG]Bin->Hex: ", inputHex)
})

// 10進数 -> 2進数・16進数
tapDecBtn.addEventListener('click', () => {
	inputDec = document.getElementById("js-inputDec").value
	if (inputDec) {
		var ans = parseInt(inputDec)
		inputBin = ans.toString(2)
		inputHex = ans.toString(16)
		document.getElementById("js-inputBin").value = inputBin
		document.getElementById("js-inputHex").value = inputHex
	}
	console.log("[DEBUG]Dec->Bin: ", inputBin)
	console.log("[DEBUG]Dec->Hex: ", inputHex)
})

// 16進数 -> 2進数・10進数
tapHexBtn.addEventListener('click', () => {
	inputHex = document.getElementById("js-inputHex").value
	if (inputHex) {
		inputDec = parseInt(inputHex, 16)
		inputBin = inputDec.toString(2)
		document.getElementById("js-inputDec").value = inputDec
		document.getElementById("js-inputBin").value = inputBin
	}
	console.log("[DEBUG]Hex->Dec: ", inputDec)
	console.log("[DEBUG]Hex->Bin: ", inputBin)
})

/**
 * 計算
 */

// 選択されたラジオボタンの情報を取得する
const getRadioValue = () => {
	var radios = document.getElementsByName("base_num")

	for (let i=0; i<radios.length; i++) {
		if (radios[i].checked) {
			radioSelected = radios[i].value
			console.log("選択されたラジオボタン: ", radioSelected)
		}
	}
}

// TODO：下記の処理は演算以外同じなのでうまくまとめたい
// 論理和
tapOrBtn.addEventListener('click', () => {
	const inputBaseId = "js-inputAny"
	const inputNumMax = 10
	if (radioSelected === "bin") {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
		  	var num = parseInt(inputBinCalc, 2)
				inputSum |= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(2)
	} else {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
				var num = parseInt(inputBinCalc, 16)
				inputSum |= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(16)
	}
	document.getElementById("output").textContent = inputSum
	console.log("[DEBUG]Calc result or: ", inputSum)
	inputSum = 0
})

// 論理積
tapAndBtn.addEventListener('click', () => {
	const inputBaseId = "js-inputAny"
	const inputNumMax = 10
	if (radioSelected === "bin") {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
		  	var num = parseInt(inputBinCalc, 2)
				inputSum &= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(2)
	} else {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
				var num = parseInt(inputBinCalc, 16)
				inputSum &= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(16)
	}
	document.getElementById("output").textContent = inputSum
	console.log("[DEBUG]Calc result and: ", inputSum)
	inputSum = 0
})

// 排他的論理和
tapXorBtn.addEventListener('click', () => {
	const inputBaseId = "js-inputAny"
	const inputNumMax = 10
	if (radioSelected === "bin") {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
		  	var num = parseInt(inputBinCalc, 2)
				inputSum ^= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(2)
	} else {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
				var num = parseInt(inputBinCalc, 16)
				inputSum ^= num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(16)
	}
	document.getElementById("output").textContent = inputSum
	console.log("[DEBUG]Calc result xor: ", inputSum)
	inputSum = 0
})

// TODO：ビット反転
tapNotBtn.addEventListener('click', () => {
	
})

// 加算
tapAddBtn.addEventListener('click', () => {
	const inputBaseId = "js-inputAny"
	const inputNumMax = 10
	if (radioSelected === "bin") {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
		  	var num = parseInt(inputBinCalc, 2)
				inputSum += num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(2)
	} else {
		for (let i=1; i<inputNumMax+1; i++) {
			var inputId = inputBaseId + `${i}`
			inputBinCalc = document.getElementById(inputId).value
			if (inputBinCalc != "" && inputBinCalc != null) {
				var num = parseInt(inputBinCalc, 16)
				inputSum += num
			}
		}
		inputSum = parseInt(inputSum, 10).toString(16)
	}
	document.getElementById("output").textContent = inputSum
	console.log("[DEBUG]Calc result add: ", inputSum)
	inputSum = 0
})
