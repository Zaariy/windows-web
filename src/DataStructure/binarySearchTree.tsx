export type propType = {
  id: number ,
  component?: React.ReactNode ,
}

export  class TreeNode {
    value: propType;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: propType) {
        
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export  class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: propType): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (value.id < currentNode.value.id) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    search(value: propType): TreeNode | null {
        let currentNode = this.root;
        while (currentNode) {
            if (value.id === currentNode.value.id) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    //     remove(value: number): void {
    //     this.root = this.removeNode(this.root, value);
    // }
    
    inOrderTraversal(node: TreeNode | null, result: propType[] = []): propType[] {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return  result;
    }

    private removeNode(node: TreeNode | null, value: propType): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value.id < node.value.id) {
            node.left = this.removeNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                const minRight = this.findMinNode(node.right);
                node.value = minRight.value;
                node.right = this.removeNode(node.right, minRight.value);
            }
        }

        return node;
    }

    private findMinNode(node: TreeNode): TreeNode {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

}