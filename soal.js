let array = []

let arr_genap = []
let max_genap
let min_genap
let avg_genap = 0
let total_genap = 0

let arr_ganjil = []
let max_ganjil
let min_ganjil
let avg_ganjil = 0
let total_ganjil = 0

// Function initial big array
for (let index = 0; index < 100; index++) {
  array.push(Math.floor(Math.random()*50));
}

console.log(array);

// function untuk pecah array
for (let index = 0; index < array.length; index++) {
  if (index % 2 == 0) {
    arr_genap.push(array[index])
  } else {
    arr_ganjil.push(array[index])
  }
}

console.log("Array Genap");
console.log(arr_genap);
console.log("Array Ganjil");
console.log(arr_ganjil);

function findMax(arr) {
  max = arr[0]
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index]
    }
  }
  return max
}

function findMin(arr) {
  min = arr[0]
  for (let index = 0; index < arr.length; index++) {
    if (min > arr[index]) {
      min = arr[index]
    }
  }
  return max
}

function findTotal(arr) {
  total = 0
  for (let index = 0; index < arr.length; index++) {
    total += arr[index]
  }
  return total
}

function findAvg(arr) {
  avg = 0
  total = 0
  for (let index = 0; index < arr.length; index++) {
    total += arr[index]
  }
  avg = total / arr.length
  return avg
}

function findAllCal(arr) {
  result = []
  max = arr[0]
  min = arr[0]
  total = 0
  avg = 0
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index]
    }
    if (min > arr[index]) {
      min = arr[index]
    }
    total += arr[index]
  }
  avg = total / arr.length
  result.push(min)
  result.push(max)
  result.push(total)
  result.push(avg)

  return result
}

// for (let index = 0; index < 50; index++) {
//   min_ganjil = arr_ganjil[0]
//   max_ganjil = arr_ganjil[0]
//   min_genap = arr_genap[0]
//   min_genap = arr_genap[0]

//   if (min_ganjil > arr_ganjil[index]) {
//     min_ganjil = arr_ganjil[index]
//   }
//   if (min_genap > arr_genap[index]) {
//     min_genap = arr_genap[index]
//   }
//   if (max_ganjil < arr_ganjil[index]) {
//     max_ganjil = arr_ganjil[index]
//   }
//   if (max_genap < arr_genap[index]) {
//     max_genap = arr_genap[index]
//   }
//   total_ganjil += arr_ganjil[index]
//   total_genap += arr_genap[index]
// }

// avg_ganjil = total_ganjil / arr_ganjil.length
// avg_genap = total_genap / arr_genap.length

// console.log("Analisis Data Ganjil");
// console.log("Min " + min_ganjil);
// console.log("Max " + max_ganjil);
// console.log("Total " + total_ganjil);
// console.log("Avg " + avg_ganjil);

// console.log("Analisis Data Genap");
// console.log("Min " + min_genap);
// console.log("Max " + max_genap);
// console.log("Total " + total_genap);
// console.log("Avg " + avg_genap);

// if (max_ganjil > max_genap) {
//   console.log("Max ganjil lebih besar dari Max genap");
// } else if (max_ganjil < max_genap) {
//   console.log("Max genap lebih besar dari Max ganjil");
// } else {
//   console.log("Max pada kedua Array sama");
// }

// if (min_ganjil > min_genap) {
//   console.log("Min ganjil lebih besar dari Min genap");
// } else if (min_ganjil < min_genap) {
//   console.log("Min genap lebih besar dari Min ganjil");
// } else {
//   console.log("Min pada kedua Array sama");
// }

// if (total_ganjil > total_genap) {
//   console.log("Total ganjil lebih besar dari Total genap");
// } else if (total_ganjil < total_genap) {
//   console.log("Total genap lebih besar dari Total ganjil");
// } else {
//   console.log("Total pada kedua Array sama");
// }

// if (avg_ganjil > avg_genap) {
//   console.log("Avg ganjil lebih besar dari Avg genap");
// } else if (avg_ganjil < avg_genap) {
//   console.log("Avg genap lebih besar dari Avg ganjil");
// } else {
//   console.log("Avg pada kedua Array sama");
// }