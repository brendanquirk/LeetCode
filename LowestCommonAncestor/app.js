/*
Question:

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”
*/

const lowestCommonAncestor = (root, p, q) => {
  //initialize current to root element in tree
  current = root

  while (current != null) {
    //if the p and q are less than current move left in the tree
    //else if p and q are greater than current move right in the tree
    //else return current as the LCA
    if (p.val < current.val && q.val < current.val) {
      current = current.left
    } else if (p.val > current.val && q.val > current.val) {
      current = current.right
    } else {
      return current
    }
  }
  //failsafe
  return null
}
