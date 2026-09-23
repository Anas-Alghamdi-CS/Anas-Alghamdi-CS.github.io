import { execSync } from 'child_process';

console.log('🚀 Building production bundle...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📦 Creating git tree for dist folder...');
execSync('git add -f dist', { stdio: 'inherit' });
const tree = execSync('git write-tree --prefix=dist').toString().trim();

console.log('📝 Creating commit object...');
const commit = execSync(`git commit-tree ${tree} -m "Deploy fresh production build"`).toString().trim();

console.log('🌐 Pushing to GitHub main branch...');
execSync(`git push origin ${commit}:refs/heads/main --force`, { stdio: 'inherit' });

console.log('✅ Deployed successfully to https://anas-alghamdi-cs.github.io/ !');
