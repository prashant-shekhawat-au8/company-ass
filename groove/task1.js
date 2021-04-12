function reverse(input){
    const Array = input.split(' ');
    let result = '';
    Array.map((str, i) => {
      if (str.length >= 5){
        Array[i] = str.split('').reverse().join('');
      } else {
        Array[i] = str;
      }
    result = Array.join(' ');
    });
  return result;
  }

 console.log(reverse("this is my nschoool"))
