let preloader=document.getElementById('preloader');window.addEventListener('load',function(){preloader.style.opacity="0";setTimeout(function(){preloader.style.display="none"},500)});$(document).ready(function(){$('body, html').css('opacity','1')});document.querySelector('.navkorb').addEventListener('click',function(){this.classList.toggle('active');let bars=this.querySelectorAll('.bar');bars.forEach(bar=>{bar.classList.toggle('active')})});document.querySelectorAll('.bar a').forEach(link=>{link.addEventListener('click',function(event){if(!link.parentElement.classList.contains('active')){event.preventDefault()}})});const navKorb=document.querySelector('.navkorb');const body=document.querySelector('body');navKorb.addEventListener('click',function(){if(body.classList.contains('hamburger-active')){body.classList.remove('hamburger-active')}else{body.classList.add('hamburger-active')}});$(function(){$(".active").hide();$(".inhalt h3").on("click",function(){$(this).next().slideToggle()})})