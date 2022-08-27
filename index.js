let marks_class_12 = [91,82,63,84,false,"Not Present"]

console.log(marks_class_12)

console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])  //Will be undefined because index 6 does not exists
console.log("Length of marks class 12 is ",marks_class_12.length)
marks_class_12[6]=89
marks_class_12[0]=96
console.log(marks_class_12)