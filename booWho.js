// Solution 1:
function booWho(bool) {
  return (bool === false || bool === true) ? true : false;
}

booWho(null);

// Solution 2:
function booWho(bool) {
	return typeof bool === "boolean";
}

booWho(null);
