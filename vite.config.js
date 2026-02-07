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
	            "resources/style.min.css",
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
                'resources/js/app.js'],
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
