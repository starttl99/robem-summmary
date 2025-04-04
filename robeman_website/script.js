// 기본 JavaScript 기능

document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글 기능
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.main-header .container');
    
    if (window.innerWidth <= 992) {
        header.insertBefore(mobileMenuToggle, mainNav);
        mainNav.classList.add('mobile-hidden');
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 992) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                header.insertBefore(mobileMenuToggle, mainNav);
                mainNav.classList.add('mobile-hidden');
            }
        } else {
            if (document.querySelector('.mobile-menu-toggle')) {
                document.querySelector('.mobile-menu-toggle').remove();
                mainNav.classList.remove('mobile-hidden');
            }
        }
    });
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('mobile-hidden');
        this.classList.toggle('active');
    });
    
    // 스크롤 시 헤더 스타일 변경
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 검색 기능
    const searchForm = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-box input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // 실제 검색 기능 구현 시 이 부분을 수정
            alert('검색 기능은 현재 개발 중입니다. 검색어: ' + searchTerm);
        }
    });
    
    // 비디오 카드 클릭 시 유튜브로 이동
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            // 실제 구현 시 각 카드에 data-url 속성을 추가하고 해당 URL로 이동하도록 수정
            const videoUrl = this.getAttribute('data-url') || 'https://www.youtube.com/channel/UCTTqmxp7S5NE6TcJJlTZTsQ';
            window.open(videoUrl, '_blank');
        });
    });
    
    // 스크롤 애니메이션
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };
    
    // 애니메이션 클래스 추가
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 초기 로드 시 실행
});
