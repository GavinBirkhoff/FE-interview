const path = require("path");
const fs = require('fs')

const cwd = process.cwd();
const getChildrenPaths = (dir) => {
  const p = path.join(cwd, dir);
    const files = fs.readdirSync(p,(err, files)=>{
        if(err) throw err
        return files
    }).map(item=>path.join('/',dir,item).replace('.md','')).filter(item=>!item.includes('README'))
  return files;
};

module.exports = getChildrenPaths;
