/*
 *  Tree
 */
function BinarySearchTree(val) {
  this.root = new BST(val);
};

/*
 *  Node
 */
function BST(v,l,r) {
  this.value = v;
  this.left = l; // Left subtree
  this.right = r; // Right subtree
};

BST.prototype.isEmpty = function() {
  return this.root == null;
};

//r becomes the element on the root node of t;
//if (e equals r) terminate successfully;
//else if (e < r) repeat search on left subtree;
//else repeat search on right subtree;

BST.prototype.search = function(value) {
  if(isEmpty())
    throw "Tree is empty!";
    
  if (this.root == value)
    return true;
  else
    //...
    
};

BST.prototype.insert = function(value) {
};

BST.prototype.delete = function(value) {
};
