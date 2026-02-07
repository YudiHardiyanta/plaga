import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                //css web
                "resources/css/bootstrap.min.css",    
	            "resources/css/swiper.min.css",    
	            "resources/css/tobii.min.css",    
                "resources/css/materialdesignicons.min.css",       
	            // Custom  Css
	            "resources/css/style.min.css",
                //end css web

                //Js web
                "resources/js/bootstrap.bundle.min.js",
                "resources/js/swiper.min.js",
                "resources/js/tobii.min.js",
                "resources/js/contact.js",
                "resources/js/gumshoe.js",
                "resources/js/feather.min.js",
	    
	            "resources/js/plugins.init.js",
	            "resources/js/app.js",
                //end Js we
                'resources/js/app.js',
            
            
                //resource
                'resources/images/favicon.ico',
                'resources/images/bg/pelaga1.webp',
                'resources/images/bg/pelaga2.webp',
                'resources/images/bg/pelaga3.webp',
                'resources/images/logo-light.png',
                'resources/images/logo-dark.png',



                'resources/images/portfolio/1.jpg',
                'resources/images/portfolio/2.jpg',
                'resources/images/portfolio/3.jpg',
                'resources/images/portfolio/4.jpg',
                'resources/images/portfolio/5.jpg', 


                'resources/images/client/01.jpg',
                'resources/images/client/02.jpg',
                'resources/images/client/03.jpg',
                'resources/images/client/04.jpg',
                'resources/images/client/05.jpg',
                'resources/images/client/06.jpg',
                'resources/images/client/07.jpg',
                'resources/images/client/08.jpg',   

                'resources/images/blog/1.jpg',
                'resources/images/blog/2.jpg',
                'resources/images/blog/3.jpg',


                'resources/images/portfolio/1.jpg',
                'resources/images/portfolio/2.jpg',
                'resources/images/portfolio/3.jpg',
                'resources/images/portfolio/4.jpg',
                'resources/images/portfolio/5.jpg', 
                'resources/images/portfolio/6.jpg',
                'resources/images/portfolio/7.jpg',
                'resources/images/portfolio/8.jpg',
                'resources/images/portfolio/9.jpg',
                'resources/images/portfolio/10.jpg',
                'resources/images/portfolio/11.jpg',
                'resources/images/portfolio/12.jpg',
                'resources/images/portfolio/13.jpg',
                'resources/images/portfolio/14.jpg',
                'resources/images/portfolio/15.jpg',
                'resources/images/portfolio/16.jpg',
                'resources/images/portfolio/17.jpg',
                'resources/images/portfolio/18.jpg',
                'resources/images/portfolio/19.jpg',
                //end resource
            
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
