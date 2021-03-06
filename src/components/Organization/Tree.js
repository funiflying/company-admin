import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;
class TreeComponent extends React.Component {
    componentDidMount() {
    }
    render() {
        const {loadData,rootData, nodesData,selectHandler}=this.props;
        const props={
            showLine:true,
            loadData:(node)=>{
                this.setState({
                    expandedKeys:[node.props.eventKey]
                });
                return new Promise((resolve) => {
                    setTimeout(() => {
                        loadData(node);
                        resolve();
                    }, 1000);
                });
            },
            onSelect:(key,node)=>{
                selectHandler(node)
            }
        };
        const loop = (data=[]) => data.map((item) => {
            if (item.organizationList&&item.organizationList.length>0) {
                return <TreeNode title={item.nodeName}  key={item.id} isOrgan={true} eid={item.eid}>{loop(item.organizationList)}</TreeNode>;
            }
            return <TreeNode title={item.nodeName} key={item.id} isLeaf={true} isOrgan={true} eid={item.eid}></TreeNode>;
        });
        const treeNodes = loop(nodesData.organizationList);
        return (
            <Tree {...props}>
                <TreeNode title={rootData.company} key={rootData.id}>
                    <TreeNode title={nodesData.nodeName} key={nodesData.id} eid={nodesData.eid} isOrgan={true}>
                        {treeNodes}
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

export default TreeComponent;