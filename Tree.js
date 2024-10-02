class Tree {
    constructor() {
        this.root = null;
    }
    
    addChild(_parent, _child){
        if(_child.data < _parent.data){
            _parent.left === null ? _parent.left = _child : this.addChild(_parent.left, _child);
        }
        if(_child.data > _parent.data){
            _parent.right === null ? _parent.right = _child : this.addChild(_parent.right, _child);
        }
    }

    addNode(_node){
        if(this.root === null){
            this.root = _node;
        }
        else{
            this.addChild(this.root, _node)
        }
    }

    findChild(_parentNode, _key){
        if(_parentNode === null)
            return false;

        if(_key === _parentNode.data)
            return true;
        else if(_key < _parentNode.data)
            return this.findChild(_parentNode.left, _key);
        else if(_key > _parentNode.data)
            return this.findChild(_parentNode.right, _key);
    }

    hasNode(_num){
        return this.findChild(this.root, _num);
    }
}

// module.exports = Tree;
export default Tree;