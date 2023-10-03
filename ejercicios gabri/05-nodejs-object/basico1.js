function getVoteCount(votes) {
  if (votes && typeof votes === 'object' && 'upvotes' in votes && 'downvotes' in votes) {
    return votes.upvotes - votes.downvotes;
  } else {
    return "Invalid input: the object should have 'upvotes' and 'downvotes' properties.";
  }
}

// Example usage:
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); 
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); 
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); 