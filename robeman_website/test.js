// 테스트 스크립트
document.addEventListener('DOMContentLoaded', function() {
    console.log('테스트 스크립트 실행 시작');
    
    // 기본 기능 테스트
    testBasicFunctionality();
    
    // 반응형 디자인 테스트
    testResponsiveDesign();
    
    // 네비게이션 테스트
    testNavigation();
    
    // 검색 기능 테스트
    testSearch();
    
    // 필터링 기능 테스트
    testFiltering();
    
    console.log('테스트 스크립트 실행 완료');
});

// 기본 기능 테스트
function testBasicFunctionality() {
    console.log('기본 기능 테스트 시작');
    
    // 페이지 로드 확인
    console.log('페이지 로드 확인: ' + (document.readyState === 'complete' ? '성공' : '실패'));
    
    // 로고 및 네비게이션 확인
    const logo = document.querySelector('.logo');
    console.log('로고 확인: ' + (logo ? '성공' : '실패'));
    
    const nav = document.querySelector('.main-nav');
    console.log('네비게이션 확인: ' + (nav ? '성공' : '실패'));
    
    // 푸터 확인
    const footer = document.querySelector('.main-footer');
    console.log('푸터 확인: ' + (footer ? '성공' : '실패'));
    
    console.log('기본 기능 테스트 완료');
}

// 반응형 디자인 테스트
function testResponsiveDesign() {
    console.log('반응형 디자인 테스트 시작');
    
    // 현재 뷰포트 크기 확인
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log('현재 뷰포트 크기: ' + width + 'x' + height);
    
    // 모바일 뷰포트 시뮬레이션
    console.log('모바일 뷰포트 시뮬레이션 (576px 이하)');
    if (width <= 576) {
        console.log('현재 모바일 뷰포트입니다.');
        checkMobileLayout();
    } else {
        console.log('모바일 뷰포트 테스트를 위해서는 브라우저 크기를 576px 이하로 조정하세요.');
    }
    
    // 태블릿 뷰포트 시뮬레이션
    console.log('태블릿 뷰포트 시뮬레이션 (576px ~ 992px)');
    if (width > 576 && width <= 992) {
        console.log('현재 태블릿 뷰포트입니다.');
        checkTabletLayout();
    } else {
        console.log('태블릿 뷰포트 테스트를 위해서는 브라우저 크기를 576px ~ 992px로 조정하세요.');
    }
    
    // 데스크톱 뷰포트 시뮬레이션
    console.log('데스크톱 뷰포트 시뮬레이션 (992px 초과)');
    if (width > 992) {
        console.log('현재 데스크톱 뷰포트입니다.');
        checkDesktopLayout();
    } else {
        console.log('데스크톱 뷰포트 테스트를 위해서는 브라우저 크기를 992px 초과로 조정하세요.');
    }
    
    console.log('반응형 디자인 테스트 완료');
}

// 모바일 레이아웃 확인
function checkMobileLayout() {
    // 모바일 메뉴 확인
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    console.log('모바일 메뉴 확인: ' + (mobileMenu ? '성공' : '실패'));
    
    // 그리드 레이아웃 확인
    const grids = document.querySelectorAll('.season-grid, .topic-grid, .video-grid, .insights-grid');
    let gridSuccess = true;
    grids.forEach(grid => {
        const columns = window.getComputedStyle(grid).gridTemplateColumns;
        if (columns.split(' ').length > 1) {
            gridSuccess = false;
        }
    });
    console.log('모바일 그리드 레이아웃 확인: ' + (gridSuccess ? '성공' : '실패'));
}

// 태블릿 레이아웃 확인
function checkTabletLayout() {
    // 네비게이션 레이아웃 확인
    const nav = document.querySelector('.main-nav');
    const navDisplay = window.getComputedStyle(nav).display;
    console.log('태블릿 네비게이션 레이아웃 확인: ' + (navDisplay === 'flex' ? '성공' : '실패'));
    
    // 그리드 레이아웃 확인
    const grids = document.querySelectorAll('.season-grid, .topic-grid, .video-grid, .insights-grid');
    let gridSuccess = true;
    grids.forEach(grid => {
        const columns = window.getComputedStyle(grid).gridTemplateColumns;
        const columnCount = columns.split(' ').length;
        if (columnCount < 1 || columnCount > 3) {
            gridSuccess = false;
        }
    });
    console.log('태블릿 그리드 레이아웃 확인: ' + (gridSuccess ? '성공' : '실패'));
}

// 데스크톱 레이아웃 확인
function checkDesktopLayout() {
    // 네비게이션 레이아웃 확인
    const nav = document.querySelector('.main-nav');
    const navDisplay = window.getComputedStyle(nav).display;
    console.log('데스크톱 네비게이션 레이아웃 확인: ' + (navDisplay === 'flex' ? '성공' : '실패'));
    
    // 그리드 레이아웃 확인
    const grids = document.querySelectorAll('.season-grid, .topic-grid, .video-grid, .insights-grid');
    let gridSuccess = true;
    grids.forEach(grid => {
        const columns = window.getComputedStyle(grid).gridTemplateColumns;
        const columnCount = columns.split(' ').length;
        if (columnCount < 3) {
            gridSuccess = false;
        }
    });
    console.log('데스크톱 그리드 레이아웃 확인: ' + (gridSuccess ? '성공' : '실패'));
}

// 네비게이션 테스트
function testNavigation() {
    console.log('네비게이션 테스트 시작');
    
    // 메뉴 링크 확인
    const menuLinks = document.querySelectorAll('.main-nav a');
    console.log('메뉴 링크 수: ' + menuLinks.length);
    
    // 현재 페이지 활성화 확인
    const activeLink = document.querySelector('.main-nav a.active');
    console.log('현재 페이지 활성화 확인: ' + (activeLink ? '성공 (' + activeLink.textContent + ')' : '실패'));
    
    // 페이지 내 네비게이션 확인
    const pageNavs = document.querySelectorAll('.insights-nav, .popular-nav, .resources-nav');
    if (pageNavs.length > 0) {
        console.log('페이지 내 네비게이션 확인: 성공');
        
        // 페이지 내 네비게이션 링크 확인
        const pageNavLinks = document.querySelectorAll('.insights-nav-item, .popular-nav-item, .resources-nav-item');
        console.log('페이지 내 네비게이션 링크 수: ' + pageNavLinks.length);
    } else {
        console.log('페이지 내 네비게이션 확인: 해당 없음');
    }
    
    console.log('네비게이션 테스트 완료');
}

// 검색 기능 테스트
function testSearch() {
    console.log('검색 기능 테스트 시작');
    
    // 검색 박스 확인
    const searchBox = document.querySelector('.search-box');
    console.log('검색 박스 확인: ' + (searchBox ? '성공' : '실패'));
    
    if (searchBox) {
        // 검색 입력 필드 확인
        const searchInput = searchBox.querySelector('input');
        console.log('검색 입력 필드 확인: ' + (searchInput ? '성공' : '실패'));
        
        // 검색 버튼 확인
        const searchButton = searchBox.querySelector('button');
        console.log('검색 버튼 확인: ' + (searchButton ? '성공' : '실패'));
        
        // 검색 이벤트 리스너 확인
        if (searchButton) {
            console.log('검색 이벤트 리스너 확인: 테스트를 위해 검색 버튼을 클릭하세요.');
        }
    }
    
    // 용어 사전 검색 확인
    const glossarySearch = document.getElementById('glossary-search-input');
    if (glossarySearch) {
        console.log('용어 사전 검색 확인: 성공');
        console.log('용어 사전 검색 테스트를 위해 검색어를 입력하세요.');
    } else {
        console.log('용어 사전 검색 확인: 해당 없음');
    }
    
    console.log('검색 기능 테스트 완료');
}

// 필터링 기능 테스트
function testFiltering() {
    console.log('필터링 기능 테스트 시작');
    
    // 주제별 필터 확인
    const topicFilters = document.querySelectorAll('.topic-filter-btn');
    if (topicFilters.length > 0) {
        console.log('주제별 필터 확인: 성공');
        console.log('주제별 필터 수: ' + topicFilters.length);
        console.log('주제별 필터 테스트를 위해 필터 버튼을 클릭하세요.');
    } else {
        console.log('주제별 필터 확인: 해당 없음');
    }
    
    // 시즌 탭 확인
    const seasonTabs = document.querySelectorAll('.season-tab');
    if (seasonTabs.length > 0) {
        console.log('시즌 탭 확인: 성공');
        console.log('시즌 탭 수: ' + seasonTabs.length);
        console.log('시즌 탭 테스트를 위해 탭을 클릭하세요.');
    } else {
        console.log('시즌 탭 확인: 해당 없음');
    }
    
    console.log('필터링 기능 테스트 완료');
}
