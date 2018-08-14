// Array.prototype.filter will remove all falsy values by default

function bouncer(arr) {
   return arr.filter(x => x)
}

bouncer([7, "ate", "", false, 9]);
