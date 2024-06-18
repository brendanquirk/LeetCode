/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 /*
Question: 

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

const mergeTwoLists = (list1, list2) => {
    //create a new dummy starting point for our new merged linked list
    const dummy = new ListNode(-Infinity)
    
    //create a ref to the dummy node so we can return this later
    let prev = dummy

    while (list1 && list2){
        //check what value is greater to determine which list to merge from next
        if (list1.val <= list2.val) {
            //set pointer 
            prev.next = list1
            //increment prev to whatever list1 currently is in the loop
            prev = list1
            //increment list1 to its pointer
            list1 = list1.next
        } else {
            //same steps but for list2
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
    }
    //if list1 is empty merge in list2
    if (!list1) prev.next = list2
    //if list2 is empty merge in list1
    if (!list2) prev.next = list1

    //return everything after our dummy node (the new head)
    return dummy.next

}