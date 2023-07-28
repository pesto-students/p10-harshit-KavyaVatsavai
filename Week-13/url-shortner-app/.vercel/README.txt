Step 1: Develop the URL Shortener
First, you need to develop the URL shortener web application. There are various programming languages and frameworks you can use to build it. Some popular choices include Node.js with Express, Python with Flask/Django, Ruby on Rails, etc. Choose the one you are most comfortable with.

Step 2: Choose a Hosting Solution
As you mentioned, you want to use a free hosting solution. There are several options available, such as Vercel, Netlify, Heroku, GitHub Pages, Firebase, etc. For this example, we'll use Vercel, but you can follow a similar process with other providers.

Step 3: Create an Account on Vercel
Go to the Vercel website (vercel.com) and create a free account if you don't have one already.

Step 4: Install Vercel CLI (Command-Line Interface)
To deploy your application to Vercel, you'll need the Vercel CLI. You can install it using npm (Node.js package manager) by running the following command in your terminal:

Copy code
npm install -g vercel
Step 5: Build Your Application
Before deploying, make sure your URL shortener application is ready for production. Create a production build using the build command specific to the framework you're using. For example, if you're using Node.js with Express, the command might be:

arduino
Copy code
npm run build
Step 6: Deploy to Vercel
With the Vercel CLI installed and the production build ready, navigate to your project's root directory in the terminal and run the following command:

Copy code
vercel
This command will prompt you to log in to your Vercel account (if you haven't already) and will guide you through the deployment process. Once the deployment is successful, Vercel will provide you with a unique URL where your URL shortener is now live.

Step 7: Configure Custom Domain (Optional)
If you have a custom domain, you can configure it with Vercel. In your Vercel dashboard, go to your project settings and add your custom domain. Vercel will provide you with instructions on how to set up DNS settings for your domain to point to their servers.

Now your URL shortener web application should be accessible through the hostname you chose (e.g., yourdomain.com) or the default Vercel URL.
Following is the output:

Vercel CLI 31.1.1
> > No existing credentials found. Please log in:
? Log in to Vercel github
> Please visit the following URL in your web browser:
> Success! GitHub authentication complete for kavyavatsavai24@gmail.com 
? Set up and deploy “C:\Development\pesto\p10-harshit-KavyaVatsavai\Week
-13\url-shortner-app”? [Y/n] y
? Which scope do you want to deploy to? PestoAssingment
? Link to existing project? [y/N] n
? What’s your project’s name? url-shortner-app
? In which directory is your code located? ./
Local settings detected in vercel.json:
Auto-detected Project Settings (Create React App):
- Build Command: react-scripts build
- Development Command: react-scripts start
- Install Command: `yarn install`, `pnpm install`, or `npm install`
- Output Directory: build
? Want to modify these settings? [y/N] n
🔗  Linked to pestoassingment/url-shortner-app (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/pestoassingment/url-shortner-app/7dPjJaz8TncYsnFemY3FpiDCuSQv [2s]
✅  Production: https://url-shortner-app-kohl.vercel.app [29s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/pestoassingment/url-shortner-app/settings


