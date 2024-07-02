/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 /*
 Question:
 Given the root of a binary tree, invert the tree, and return its root.
 */

const invertTree = (root) => {
    //base case
    if (!root) return root

    //store the return value of our function given the right value
    const right = invertTree(root.right)
    //store the return value of our function given the left value
    const left = invertTree(root.left)
    //swap the left value to the right value stored above
    root.left = right
    //swap the right value to the left value stored above
    root.right = left
    //return root to pass back into our recursive function
    return root
}