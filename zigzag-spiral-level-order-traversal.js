/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
   
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

====
VIDEO EXPLANATION =  https://www.youtube.com/watch?v=4u--XDffIZM
====
**/

// Binary tree as input
const binaryTree = {
  value: 3,
  left: {
     value: 20,
     left: {
         value: 7,
         left: null,
         right: null
     },
     right: {
          value: 15,
          left: null,
          right: null
      }
  },
  right: {
      value: 9,
      left: null,
      right: null
  }
};

const zigzagLevelOrder = (root) => {
    let results = [];
    const lot = (root, level) => {
        if(!root) return;
        
        if(results[level]) results[level].push(root.value);
        else results[level] = [root.value];
        
        lot(root.left, level+1);
        lot(root.right, level+1);
    }
    lot(root, 0);
    return results.map((b,i)=>(i%2) ? b : b.reverse());
};

const result = zigzagLevelOrder(binaryTree);
console.log(result);