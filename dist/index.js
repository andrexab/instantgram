"use strict";var VERSION="1.1.0",hostname=location.hostname,path=location.pathname,href=location.href,images=document.images,regex_original_image=/\/[a-z]+\d+[a-z]?x\d+[a-z]?/,regex_path=/^\/p\//,regex_hostname=/instagram\.com/;if(regex_hostname.test(hostname)||alert("[instantgram] only works in instagram.com"),regex_hostname.test(hostname))if(regex_path.test(path)){try{if(2===document.getElementsByTagName("article").length){var modal=document.getElementsByTagName("article")[1],modal_image=modal.children[1].firstChild.firstChild.firstChild.src;if(modal_image){var image_link=regex_original_image.test(modal_image)?modal_image.replace(regex_original_image,""):modal_image;window.open(modal_image)}else alert("[instantgram] don't found a image in instagram post. Try open the link in new tab.")}}catch(e){console.error("[instantgram] "+VERSION,e)}try{if(1===document.getElementsByTagName("article").length){var post=document.getElementsByTagName("article")[0],post_image=post.children[1].firstChild.firstChild.firstChild.src,image_link=regex_original_image.test(post_image)?post_image.replace(regex_original_image,""):post_image;window.open(image_link)}else alert("ops, [instantgram] don't found the image :(")}catch(e){console.error("[instantgram] "+VERSION,e)}}else alert("ops, are you in a instagram post? ex: instagram.com/p/82jd828jd");