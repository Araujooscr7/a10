 // ===== COMUNIDADE ATIVA - APP PRINCIPAL =====
// Sistema de Navegação SPA (Single Page Application)

// Dados mockados iniciais (depois vamos mover para db.json)
let mockData = {
    users: [
        { id: 1, email: "admin@comunidade.com", password: "admin123", name: "Administrador", role: "admin" },
        { id: 2, email: "aluno@email.com", password: "aluno123", name: "João Silva", role: "aluno" }
    ],
    currentUser: null
};

// ===== FUNÇÕES DE TELAS =====

// 1. SPLASH SCREEN
function showSplashScreen() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="splash-screen fade-in">
            <div class="splash-logo">
                <i class="fas fa-users"></i>
            </div>
            
            <h1 class="splash-title">Comunidade Ativa</h1>
            <p class="splash-subtitle">Unidade Einstein</p>
            
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p class="loading-text">Carregando experiência premium...</p>
            </div>
        </div>
    `;
}

// 2. TELA DE BOAS-VINDAS
function showWelcomeScreen() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="welcome-screen slide-in">
            <div class="brand-header">
                <h1 class="brand-title">Comunidade Ativa | Unidade Einstein</h1>
                <p class="brand-subtitle">Todos os cursos esportivos, culturais e educacionais em uma única plataforma digital premium.</p>
            </div>
            
            <div class="welcome-cards">
                <!-- Card 1: Entrar -->
                <div class="action-card" onclick="showLoginScreen()">
                    <div class="card-icon">
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                    <h3 class="card-title">Entrar na Conta</h3>
                    <p class="card-description">
                        Acesse sua conta existente para gerenciar cursos, favoritos e interações.
                    </p>
                    <button class="btn btn-primary">Entrar</button>
                </div>
                
                <!-- Card 2: Criar Conta -->
                <div class="action-card" onclick="showRegisterScreen()">
                    <div class="card-icon">
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <h3 class="card-title">Criar Nova Conta</h3>
                    <p class="card-description">
                        Cadastre-se para ter acesso completo a todos os cursos e funcionalidades.
                    </p>
                    <button class="btn btn-secondary">Cadastrar</button>
                </div>
                
                <!-- Card 3: Explorar -->
                <div class="action-card" onclick="showHomeScreen()">
                    <div class="card-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <h3 class="card-title">Explorar sem Login</h3>
                    <p class="card-description">
                        Navegue pelo catálogo de cursos sem necessidade de cadastro imediato.
                    </p>
                    <button class="btn btn-outline">Explorar</button>
                </div>
            </div>
            
            <div class="mt-4 text-center">
                <p style="color: #64748b; font-size: 0.9rem;">
                    <i class="fas fa-shield-alt"></i> Plataforma 100% segura
                </p>
            </div>
        </div>
    `;
}

// 3. TELA DE LOGIN
function showLoginScreen() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="welcome-screen slide-in">
            <div class="brand-header">
                <h1 class="brand-title">Acessar Conta</h1>
                <p class="brand-subtitle">Entre com suas credenciais para acessar a plataforma</p>
            </div>
            
            <div style="max-width: 400px; width: 100%;">
                <div class="action-card">
                    <form id="loginForm" onsubmit="handleLogin(event)">
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #1e293b;">
                                <i class="fas fa-envelope"></i> Email
                            </label>
                            <input 
                                type="email" 
                                id="loginEmail"
                                placeholder="seu@email.com" 
                                required
                                style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 1rem; transition: border-color 0.3s;"
                                onfocus="this.style.borderColor='#2563eb'"
                                onblur="this.style.borderColor='#e2e8f0'"
                            >
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #1e293b;">
                                <i class="fas fa-lock"></i> Senha
                            </label>
                            <input 
                                type="password" 
                                id="loginPassword"
                                placeholder="Sua senha" 
                                required
                                style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 1rem; transition: border-color 0.3s;"
                                onfocus="this.style.borderColor='#2563eb'"
                                onblur="this.style.borderColor='#e2e8f0'"
                            >
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="checkbox" id="rememberMe">
                                <span style="color: #64748b;">Lembrar-me</span>
                            </label>
                            
                            <a href="#" onclick="showForgotPassword()" style="color: #2563eb; text-decoration: none; font-weight: 500;">
                                Esqueci a senha
                            </a>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-sign-in-alt"></i> Entrar na Conta
                        </button>
                    </form>
                    
                    <div class="mt-3 text-center">
                        <p style="color: #64748b;">
                            Não tem conta? 
                            <a href="#" onclick="showRegisterScreen()" style="color: #2563eb; font-weight: 500; text-decoration: none;">
                                Cadastre-se aqui
                            </a>
                        </p>
                    </div>
                </div>
                
                <!-- Credenciais para demonstração -->
                <div class="action-card mt-3" style="background: #f1f5f9; border: 2px dashed #cbd5e1;">
                    <h4 style="color: #2563eb; margin-bottom: 1rem;">
                        <i class="fas fa-info-circle"></i> Para demonstração:
                    </h4>
                    <p style="color: #475569; font-size: 0.9rem; line-height: 1.6;">
                        <strong>Admin:</strong> admin@comunidade.com / admin123<br>
                        <strong>Aluno:</strong> aluno@email.com / aluno123
                    </p>
                </div>
                
                <div class="mt-3 text-center">
                    <button class="btn btn-secondary" onclick="showWelcomeScreen()">
                        <i class="fas fa-arrow-left"></i> Voltar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 4. HANDLE LOGIN (FAKE)
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simula carregamento
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verificando...';
    submitBtn.disabled = true;
    
    // Delay para parecer real
    setTimeout(() => {
        // Verifica nas credenciais mockadas
        const user = mockData.users.find(u => 
            u.email === email && u.password === password
        );
        
        if (user) {
            mockData.currentUser = user;
            
            // Feedback visual de sucesso
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Login bem-sucedido!';
            submitBtn.style.background = '#10b981';
            
            // Redireciona para home após 1 segundo
            setTimeout(() => {
                showHomeScreen();
            }, 1000);
        } else {
            // Feedback de erro
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            alert('Credenciais inválidas! Use as credenciais de demonstração.');
        }
    }, 1500);
}

// 5. TELA DE REGISTRO (vamos fazer depois)
function showRegisterScreen() {
    alert('Tela de cadastro será implementada na próxima etapa! Por enquanto, use o login de demonstração.');
    showLoginScreen();
}

// 6. TELA ESQUECI SENHA (fake)
function showForgotPassword() {
    alert('Sistema de recuperação de senha simulado. Um email seria enviado na versão real.');
}

// 7. HOME SCREEN (vamos fazer depois)
function showHomeScreen() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="welcome-screen slide-in">
            <div class="brand-header">
                <h1 class="brand-title">Bem-vindo à Comunidade Ativa!</h1>
                <p class="brand-subtitle">Dashboard principal será implementado na próxima etapa</p>
            </div>
            
            <div class="action-card" style="max-width: 500px;">
                <div class="card-icon">
                    <i class="fas fa-home"></i>
                </div>
                <h3 class="card-title">Home Screen em Construção</h3>
                <p class="card-description">
                    Aqui será a tela principal com: busca, categorias, cursos em destaque, novidades e menu inferior.
                </p>
                
                <div class="mt-3" style="display: flex; gap: 1rem; justify-content: center;">
                    <button class="btn btn-primary" onclick="showWelcomeScreen()">
                        <i class="fas fa-sign-out-alt"></i> Sair
                    </button>
                    <button class="btn btn-secondary" onclick="showCoursesScreen()">
                        <i class="fas fa-book"></i> Ver Cursos
                    </button>
                </div>
            </div>
            
            <div class="mt-3 text-center">
                <p style="color: #64748b;">
                    Usuário logado: <strong>${mockData.currentUser ? mockData.currentUser.name : 'Nenhum'}</strong>
                </p>
            </div>
        </div>
    `;
}

// 8. TELA DE CURSOS (vamos fazer depois)
function showCoursesScreen() {
    alert('Catálogo de cursos será implementado na próxima etapa!');
}

// Funções globais para o HTML acessar
window.showSplashScreen = showSplashScreen;
window.showWelcomeScreen = showWelcomeScreen;
window.showLoginScreen = showLoginScreen;
window.showRegisterScreen = showRegisterScreen;
window.showForgotPassword = showForgotPassword;
window.showHomeScreen = showHomeScreen;
window.showCoursesScreen = showCoursesScreen;
window.handleLogin = handleLogin;

// 7. HOME SCREEN COMPLETA
function showHomeScreen() {
    const user = mockData.currentUser || { name: 'Visitante', role: 'guest' };
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- HEADER -->
        <header class="app-header">
            <div class="header-content">
                <div class="logo-container">
                    <div class="logo-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <div class="logo-text">
                            Comunidade Ativa <span class="logo-subtitle">| Unidade Einstein</span>
                        </div>
                    </div>
                </div>
                
                <div class="user-menu">
                    <div class="search-container">
                        <i class="fas fa-search search-icon"></i>
                        <input 
                            type="text" 
                            class="search-input" 
                            placeholder="Buscar cursos, atividades..."
                            onfocus="this.placeholder=''"
                            onblur="this.placeholder='Buscar cursos, atividades...'"
                        >
                    </div>
                    
                    <div class="user-avatar" onclick="showProfileScreen()" title="Ver perfil">
                        ${initials}
                    </div>
                    
                    <button class="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- MAIN CONTENT -->
        <main class="home-screen slide-in">
            <!-- Hero Section -->
            <section class="hero-section">
                <h1 class="hero-title">Bem-vindo, ${user.name}!</h1>
                <p class="hero-subtitle">
                    Explore mais de 50 cursos esportivos, culturais e educacionais. 
                    Encontre a atividade perfeita para você!
                </p>
                <button class="btn btn-primary" style="background: white; color: #2563eb;">
                    <i class="fas fa-play-circle"></i> Ver Tour da Plataforma
                </button>
            </section>
            
            <!-- Categorias -->
            <section>
                <h2 class="section-title">
                    <i class="fas fa-layer-group"></i> Categorias Populares
                </h2>
                <div class="categories-grid">
                    ${getCategoriesHTML()}
                </div>
            </section>
            
            <!-- Cursos em Destaque -->
            <section>
                <h2 class="section-title">
                    <i class="fas fa-star"></i> Cursos em Destaque
                </h2>
                <div class="courses-grid">
                    ${getFeaturedCoursesHTML()}
                </div>
            </section>
            
            <!-- Novidades -->
            <section>
                <h2 class="section-title">
                    <i class="fas fa-bolt"></i> Novidades Recentes
                </h2>
                <div class="courses-grid">
                    ${getNewCoursesHTML()}
                </div>
            </section>
        </main>
        
        <!-- BOTTOM NAVIGATION -->
        <nav class="bottom-nav">
            <div class="nav-items">
                <a class="nav-item active" onclick="showHomeScreen()">
                    <i class="fas fa-home nav-icon"></i>
                    <span class="nav-label">Home</span>
                </a>
                
                <a class="nav-item" onclick="showCoursesScreen()">
                    <i class="fas fa-book nav-icon"></i>
                    <span class="nav-label">Cursos</span>
                </a>
                
                <a class="nav-item" onclick="showFavoritesScreen()">
                    <i class="fas fa-heart nav-icon"></i>
                    <span class="nav-label">Favoritos</span>
                    <span class="notification-badge">3</span>
                </a>
                
                <a class="nav-item" onclick="showProfileScreen()">
                    <i class="fas fa-user nav-icon"></i>
                    <span class="nav-label">Perfil</span>
                </a>
            </div>
        </nav>
    `;
    
    // Adiciona event listeners para as categorias
    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const category = this.querySelector('.category-name').textContent;
                alert(`Filtrando por: ${category}\n(Feature será implementada)`);
            });
        });
        
        // Event listeners para os cursos
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('.course-title').textContent;
                showCourseDetail(title);
            });
        });
    }, 100);
}

// Funções auxiliares para a Home Screen
function getCategoriesHTML() {
    const categories = [
        { icon: 'fas fa-fist-raised', name: 'Artes Marciais', count: 12 },
        { icon: 'fas fa-music', name: 'Música', count: 8 },
        { icon: 'fas fa-paint-brush', name: 'Artes', count: 6 },
        { icon: 'fas fa-dumbbell', name: 'Fitness', count: 15 },
        { icon: 'fas fa-language', name: 'Idiomas', count: 10 },
        { icon: 'fas fa-utensils', name: 'Culinária', count: 5 }
    ];
    
    return categories.map(cat => `
        <div class="category-card">
            <div class="category-icon">
                <i class="${cat.icon}"></i>
            </div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${cat.count} cursos</div>
        </div>
    `).join('');
}

function getFeaturedCoursesHTML() {
    const featuredCourses = [
        {
            category: 'Artes Marciais',
            title: 'Judo Infantil (6-12 anos)',
            description: 'Desenvolvimento físico e mental através das técnicas do Judô. Aprenda disciplina, respeito e autodefesa.',
            icon: 'fas fa-user-ninja',
            rating: 4.8,
            students: 45,
            featured: true
        },
        {
            category: 'Música',
            title: 'Violão Popular - Nível Iniciante',
            description: 'Domine os acordes básicos e toque suas músicas favoritas em 2 meses.',
            icon: 'fas fa-guitar',
            rating: 4.9,
            students: 32,
            featured: true
        },
        {
            category: 'Fitness',
            title: 'Funcional Training 50+',
            description: 'Exercícios adaptados para melhorar mobilidade, força e qualidade de vida na melhor idade.',
            icon: 'fas fa-running',
            rating: 4.7,
            students: 28,
            featured: true
        }
    ];
    
    return featuredCourses.map(course => `
        <div class="course-card">
            ${course.featured ? '<span class="featured-badge">⭐ Destaque</span>' : ''}
            <div class="course-image">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-info">
                        <span class="course-rating">
                            <i class="fas fa-star"></i> ${course.rating}
                        </span>
                        <span>•</span>
                        <span><i class="fas fa-users"></i> ${course.students} alunos</span>
                    </div>
                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getNewCoursesHTML() {
    const newCourses = [
        {
            category: 'Dança',
            title: 'Salsa & Bachata Social',
            description: 'Aprenda os passos básicos e entre no mundo da dança latina. Aulas práticas com música ao vivo.',
            icon: 'fas fa-heart',
            rating: 4.6,
            students: 18
        },
        {
            category: 'Culinária',
            title: 'Culinária Vegana Básica',
            description: 'Descubra como preparar refeições saborosas e nutritivas sem produtos de origem animal.',
            icon: 'fas fa-carrot',
            rating: 4.8,
            students: 24
        },
        {
            category: 'Idiomas',
            title: 'Inglês Conversação - Intermediário',
            description: 'Pratique speaking e listening com professores nativos em situações do dia a dia.',
            icon: 'fas fa-globe-americas',
            rating: 4.7,
            students: 36
        }
    ];
    
    return newCourses.map(course => `
        <div class="course-card">
            <div class="course-image">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-info">
                        <span class="course-rating">
                            <i class="fas fa-star"></i> ${course.rating}
                        </span>
                        <span>•</span>
                        <span><i class="fas fa-users"></i> ${course.students} alunos</span>
                    </div>
                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                        <i class="fas fa-info-circle"></i> Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 9. FUNÇÕES DAS OUTRAS TELAS (placeholders)
function showCourseDetail(courseName) {
    alert(`Detalhes do curso: ${courseName}\n\nEsta tela será implementada com:\n• Informações completas\n• Professor\n• Localização\n• Botão de interesse`);
}

function showCoursesScreen() {
    alert('Catálogo completo de cursos será implementado na próxima etapa!');
}

function showFavoritesScreen() {
    alert('Tela de favoritos será implementada na próxima etapa!');
}

function showProfileScreen() {
    alert('Tela de perfil será implementada na próxima etapa!');
}

// Atualiza as funções globais
window.showCourseDetail = showCourseDetail;
window.showFavoritesScreen = showFavoritesScreen;
window.showProfileScreen = showProfileScreen;
// 7. HOME SCREEN PREMIUM
function showHomeScreen() {
    const user = mockData.currentUser || { name: 'Visitante', role: 'guest' };
    const userName = user.name || 'Visitante';
    
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- HEADER MODERNO -->
        <header class="app-header animate-fade-in" style="
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(67, 97, 238, 0.1);
            padding: 1rem 2rem;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
            ">
                <!-- Logo -->
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="
                        background: var(--gradient-primary);
                        width: 40px;
                        height: 40px;
                        border-radius: var(--radius-md);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 1.2rem;
                    ">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <div style="
                            font-family: 'Poppins', sans-serif;
                            font-weight: 700;
                            font-size: 1.3rem;
                            background: var(--gradient-primary);
                            -webkit-background-clip: text;
                            background-clip: text;
                            color: transparent;
                        ">
                            Comunidade Ativa
                        </div>
                        <div style="
                            font-size: 0.85rem;
                            color: var(--gray);
                            margin-top: 2px;
                        ">
                            Unidade Einstein
                        </div>
                    </div>
                </div>
                
                <!-- User Menu -->
                <div style="display: flex; align-items: center; gap: 1.5rem;">
                    <!-- Search Bar -->
                    <div style="position: relative;">
                        <i class="fas fa-search" style="
                            position: absolute;
                            left: 1rem;
                            top: 50%;
                            transform: translateY(-50%);
                            color: var(--gray-light);
                        "></i>
                        <input type="text" placeholder="Buscar cursos..." style="
                            padding: 0.75rem 1rem 0.75rem 3rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-full);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.95rem;
                            width: 300px;
                            transition: all var(--transition-normal);
                            background: var(--light);
                        "
                        onfocus="this.style.width='350px'; this.style.background='white'; this.style.borderColor='var(--primary)';"
                        onblur="this.style.width='300px'; this.style.background='var(--light)'; this.style.borderColor='#e2e8f0';"
                        >
                    </div>
                    
                    <!-- User Avatar -->
                    <div onclick="showProfileScreen()" style="
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;
                        background: var(--gradient-primary);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: 600;
                        cursor: pointer;
                        transition: transform var(--transition-normal);
                        box-shadow: var(--shadow-sm);
                    " 
                    onmouseover="this.style.transform='scale(1.1)'"
                    onmouseout="this.style.transform='scale(1)'"
                    title="Ver perfil">
                        ${userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
        
        <!-- MAIN CONTENT -->
        <main style="
            margin-top: 80px;
            padding: 2rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            padding-bottom: 100px;
        ">
            <!-- Hero Section -->
            <section class="animate-fade-up" style="
                background: var(--gradient-primary);
                border-radius: var(--radius-xl);
                padding: 4rem 3rem;
                color: white;
                margin-bottom: 3rem;
                text-align: center;
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-lg);
            ">
                <!-- Background Pattern -->
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%);
                "></div>
                
                <div style="position: relative; z-index: 1;">
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 3rem;
                        font-weight: 800;
                        margin-bottom: 1rem;
                        line-height: 1.2;
                    ">
                        Bem-vindo, ${userName}!
                    </h1>
                    
                    <p style="
                        font-size: 1.3rem;
                        opacity: 0.9;
                        max-width: 600px;
                        margin: 0 auto 2.5rem;
                        line-height: 1.6;
                    ">
                        Explore mais de 50 cursos esportivos, culturais e educacionais. 
                        Encontre a atividade perfeita para você!
                    </p>
                    
                    <button class="btn btn-accent" style="
                        padding: 1rem 2.5rem;
                        font-size: 1.1rem;
                    " onclick="alert('Tour da plataforma iniciado!')">
                        <i class="fas fa-play-circle"></i> VER TOUR DA PLATAFORMA
                    </button>
                </div>
            </section>
            
            <!-- Categorias -->
            <section class="animate-fade-up" style="margin-bottom: 4rem;">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                ">
                    <h2 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 2rem;
                        font-weight: 700;
                        color: var(--dark);
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                    ">
                        <div style="
                            width: 40px;
                            height: 40px;
                            border-radius: var(--radius-md);
                            background: var(--gradient-primary);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                        ">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        Categorias Populares
                    </h2>
                    
                    <a href="#" onclick="showCoursesScreen()" style="
                        color: var(--primary);
                        text-decoration: none;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        transition: color var(--transition-normal);
                    "
                    onmouseover="this.style.color='var(--primary-dark)'"
                    onmouseout="this.style.color='var(--primary)'">
                        Ver todas <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                
                <!-- Categories Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                ">
                    ${getCategoriesHTML()}
                </div>
            </section>
            
            <!-- Cursos em Destaque -->
            <section class="animate-fade-up" style="margin-bottom: 4rem;">
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                ">
                    <div style="
                        width: 40px;
                        height: 40px;
                        border-radius: var(--radius-md);
                        background: var(--gradient-accent);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    ">
                        <i class="fas fa-star"></i>
                    </div>
                    Cursos em Destaque
                </h2>
                
                <!-- Featured Courses -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                ">
                    ${getFeaturedCoursesHTML()}
                </div>
            </section>
            
            <!-- Novidades -->
            <section class="animate-fade-up">
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                ">
                    <div style="
                        width: 40px;
                        height: 40px;
                        border-radius: var(--radius-md);
                        background: var(--gradient-secondary);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    ">
                        <i class="fas fa-bolt"></i>
                    </div>
                    Novidades Recentes
                </h2>
                
                <!-- New Courses -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                ">
                    ${getNewCoursesHTML()}
                </div>
            </section>
        </main>
        
        <!-- BOTTOM NAVIGATION -->
        <nav style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(67, 97, 238, 0.1);
            padding: 0.75rem 0;
            z-index: 1000;
        ">
            <div style="
                display: flex;
                justify-content: space-around;
                max-width: 500px;
                margin: 0 auto;
            ">
                ${getBottomNavHTML()}
            </div>
        </nav>
    `;
    
    // Adiciona event listeners
    setTimeout(() => {
        // Categorias clicáveis
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const category = this.querySelector('.category-name').textContent;
                showCategoryCourses(category);
            });
        });
        
        // Cursos clicáveis
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('.course-title').textContent;
                showCourseDetail(title);
            });
        });
    }, 100);
}

// Função auxiliar para Categorias HTML
function getCategoriesHTML() {
    const categories = [
        { icon: 'fas fa-fist-raised', name: 'Artes Marciais', count: 12, color: 'var(--primary)' },
        { icon: 'fas fa-music', name: 'Música', count: 8, color: 'var(--secondary)' },
        { icon: 'fas fa-paint-brush', name: 'Artes', count: 6, color: 'var(--accent)' },
        { icon: 'fas fa-dumbbell', name: 'Fitness', count: 15, color: 'var(--success)' },
        { icon: 'fas fa-language', name: 'Idiomas', count: 10, color: 'var(--warning)' },
        { icon: 'fas fa-utensils', name: 'Culinária', count: 5, color: 'var(--danger)' }
    ];
    
    return categories.map(cat => `
        <div class="category-card" style="
            background: white;
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            text-align: center;
            box-shadow: var(--shadow-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            border: 2px solid transparent;
        "
        onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-lg)'; this.style.borderColor='${cat.color}'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'; this.style.borderColor='transparent'">
            <div style="
                font-size: 2.5rem;
                color: ${cat.color};
                margin-bottom: 1rem;
                transition: transform var(--transition-normal);
            "
            onmouseover="this.style.transform='scale(1.1)'"
            onmouseout="this.style.transform='scale(1)'">
                <i class="${cat.icon}"></i>
            </div>
            <div class="category-name" style="
                font-weight: 700;
                color: var(--dark);
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
            ">
                ${cat.name}
            </div>
            <div style="
                font-size: 0.9rem;
                color: var(--gray);
                background: var(--light);
                padding: 0.25rem 0.75rem;
                border-radius: var(--radius-full);
                display: inline-block;
            ">
                ${cat.count} cursos
            </div>
        </div>
    `).join('');
}

// Função auxiliar para Cursos em Destaque HTML
function getFeaturedCoursesHTML() {
    const courses = [
        {
            category: 'Artes Marciais',
            title: 'Judo Infantil (6-12 anos)',
            description: 'Desenvolvimento físico e mental através das técnicas do Judô. Aprenda disciplina, respeito e autodefesa.',
            icon: 'fas fa-user-ninja',
            rating: 4.8,
            students: 45,
            featured: true,
            color: 'var(--primary)'
        },
        {
            category: 'Música',
            title: 'Violão Popular - Iniciante',
            description: 'Domine os acordes básicos e toque suas músicas favoritas em 2 meses com professores especializados.',
            icon: 'fas fa-guitar',
            rating: 4.9,
            students: 32,
            featured: true,
            color: 'var(--secondary)'
        },
        {
            category: 'Fitness',
            title: 'Funcional Training 50+',
            description: 'Exercícios adaptados para melhorar mobilidade, força e qualidade de vida na melhor idade.',
            icon: 'fas fa-running',
            rating: 4.7,
            students: 28,
            featured: true,
            color: 'var(--success)'
        }
    ];
    
    return courses.map(course => `
        <div class="course-card" style="
            background: white;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-normal);
            cursor: pointer;
            position: relative;
        "
        onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='var(--shadow-xl)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'">
            ${course.featured ? `
                <div style="
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: var(--gradient-accent);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    font-size: 0.8rem;
                    font-weight: 700;
                    z-index: 2;
                    box-shadow: var(--shadow-sm);
                ">
                    <i class="fas fa-star"></i> DESTAQUE
                </div>
            ` : ''}
            
            <div style="
                width: 100%;
                height: 180px;
                background: linear-gradient(135deg, ${course.color} 0%, ${course.color}99 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%);
                "></div>
                <i class="${course.icon}" style="
                    font-size: 3.5rem;
                    color: white;
                    z-index: 1;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                "></i>
            </div>
            
            <div style="padding: 1.5rem;">
                <div style="
                    display: inline-block;
                    background: ${course.color}15;
                    color: ${course.color};
                    padding: 0.25rem 0.75rem;
                    border-radius: var(--radius-full);
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                ">
                    ${course.category}
                </div>
                
                <h3 class="course-title" style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                ">
                    ${course.title}
                </h3>
                
                <p style="
                    color: var(--gray);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                ">
                    ${course.description}
                </p>
                
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                    border-top: 1px solid var(--light);
                ">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 0.25rem; color: #f59e0b;">
                            <i class="fas fa-star"></i>
                            <span style="font-weight: 700;">${course.rating}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem; color: var(--gray);">
                            <i class="fas fa-users"></i>
                            <span>${course.students}</span>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" style="
                        padding: 0.5rem 1.5rem;
                        font-size: 0.9rem;
                    " onclick="event.stopPropagation(); showCourseDetail('${course.title}')">
                        <i class="fas fa-eye"></i> Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Função auxiliar para Novidades HTML
function getNewCoursesHTML() {
    const courses = [
        {
            category: 'Dança',
            title: 'Salsa & Bachata Social',
            description: 'Aprenda os passos básicos e entre no mundo da dança latina. Aulas práticas com música ao vivo.',
            icon: 'fas fa-heart',
            rating: 4.6,
            students: 18,
            color: 'var(--accent)'
        },
        {
            category: 'Culinária',
            title: 'Culinária Vegana Básica',
            description: 'Descubra como preparar refeições saborosas e nutritivas sem produtos de origem animal.',
            icon: 'fas fa-carrot',
            rating: 4.8,
            students: 24,
            color: 'var(--danger)'
        },
        {
            category: 'Idiomas',
            title: 'Inglês Conversação',
            description: 'Pratique speaking e listening com professores nativos em situações do dia a dia.',
            icon: 'fas fa-globe-americas',
            rating: 4.7,
            students: 36,
            color: 'var(--warning)'
        }
    ];
    
    return courses.map(course => getNewCourseCardHTML(course)).join('');
}

function getNewCourseCardHTML(course) {
    return `
        <div class="course-card" style="
            background: white;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-normal);
            cursor: pointer;
        "
        onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='var(--shadow-xl)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'">
            <div style="
                width: 100%;
                height: 180px;
                background: linear-gradient(135deg, ${course.color} 0%, ${course.color}99 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            ">
                <div style="
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(5px);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: var(--radius-full);
                    font-size: 0.8rem;
                    font-weight: 600;
                ">
                    <i class="fas fa-bolt"></i> NOVO
                </div>
                <i class="${course.icon}" style="
                    font-size: 3.5rem;
                    color: white;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                "></i>
            </div>
            
            <div style="padding: 1.5rem;">
                <div style="
                    display: inline-block;
                    background: ${course.color}15;
                    color: ${course.color};
                    padding: 0.25rem 0.75rem;
                    border-radius: var(--radius-full);
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                ">
                    ${course.category}
                </div>
                
                <h3 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                ">
                    ${course.title}
                </h3>
                
                <p style="
                    color: var(--gray);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                ">
                    ${course.description}
                </p>
                
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                    border-top: 1px solid var(--light);
                ">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.25rem; color: #f59e0b;">
                            <i class="fas fa-star"></i>
                            <span style="font-weight: 600;">${course.rating}</span>
                        </div>
                        <div style="width: 1px; height: 20px; background: var(--light);"></div>
                        <div style="color: var(--gray); font-size: 0.9rem;">
                            <i class="fas fa-users"></i> ${course.students} alunos
                        </div>
                    </div>
                    
                    <button class="btn btn-secondary" style="
                        padding: 0.5rem 1.5rem;
                        font-size: 0.9rem;
                    " onclick="event.stopPropagation(); showCourseDetail('${course.title}')">
                        <i class="fas fa-info-circle"></i> Detalhes
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Função auxiliar para Bottom Navigation
function getBottomNavHTML() {
    const navItems = [
        { icon: 'fas fa-home', label: 'Home', active: true, onclick: 'showHomeScreen()' },
        { icon: 'fas fa-book', label: 'Cursos', onclick: 'showCoursesScreen()' },
        { icon: 'fas fa-heart', label: 'Favoritos', badge: 3, onclick: 'showFavoritesScreen()' },
        { icon: 'fas fa-user', label: 'Perfil', onclick: 'showProfileScreen()' }
    ];
    
    return navItems.map(item => `
        <a class="nav-item" onclick="${item.onclick}" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: ${item.active ? 'var(--primary)' : 'var(--gray)'};
            text-decoration: none;
            position: relative;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='${item.active ? 'var(--primary)' : 'var(--gray)'}'">
            <i class="${item.icon}" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">${item.label}</span>
            
            ${item.badge ? `
                <span style="
                    position: absolute;
                    top: 0.25rem;
                    right: 0.5rem;
                    background: var(--gradient-accent);
                    color: white;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    font-size: 0.7rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                ">
                    ${item.badge}
                </span>
            ` : ''}
        </a>
    `).join('');
}

// Funções auxiliares
function showCategoryCourses(category) {
    alert(`Mostrando cursos da categoria: ${category}\n\nEsta funcionalidade será implementada com:\n• Filtragem por categoria\n• Lista completa de cursos\n• Paginação`);
}

function showCourseDetail(courseName) {
    alert(`Detalhes do curso: ${courseName}\n\nEsta tela será implementada com:\n• Informações completas do curso\n• Perfil do professor\n• Localização e horários\n• Sistema de inscrição\n• Avaliações e comentários`);
}
// 8. TELA DE DETALHES DO CURSO PREMIUM
function showCourseDetail(courseId = 1) {
    // Dados mockados do curso (depois vira do json-server)
    const course = {
        id: courseId,
        title: "Judo Infantil (6-12 anos)",
        category: "Artes Marciais",
        instructor: "Prof. Carlos Silva",
        instructorPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
        instructorRank: "Faixa Preta 4º Dan",
        instructorExperience: "15 anos de experiência",
        description: "Desenvolvimento físico e mental através das técnicas do Judô. Aprenda disciplina, respeito e autodefesa em um ambiente seguro e supervisionado.",
        
        details: {
            idadeMinima: 6,
            idadeMaxima: 12,
            dias: ["Segunda", "Quarta", "Sexta"],
            horario: "14:00 - 15:30",
            duracao: "12 semanas",
            vagas: 20,
            vagasDisponiveis: 8,
            preco: "R$ 120,00/mês",
            local: "Ginásio Principal - Sala 3"
        },
        
        objetivos: [
            "Desenvolver coordenação motora",
            "Ensinar técnicas básicas de defesa pessoal",
            "Promover disciplina e respeito",
            "Fortalecer a autoconfiança",
            "Trabalhar em equipe e socialização"
        ],
        
        beneficios: [
            "Melhora da flexibilidade e força",
            "Desenvolvimento do equilíbrio",
            "Controle emocional",
            "Foco e concentração",
            "Valores de respeito e hierarquia"
        ],
        
        conteudo: [
            { modulo: "1", topicos: ["Posturas básicas", "Quedas (ukemi)", "Rolamentos"] },
            { modulo: "2", topicos: ["Técnicas de projeção", "Imobilizações", "Transições"] },
            { modulo: "3", topicos: ["Defesa pessoal básica", "Katás iniciais", "Randori leve"] }
        ],
        
        rating: 4.8,
        totalAvaliacoes: 45,
        totalFavoritos: 128,
        formadosPorAno: {
            "2022": 18,
            "2023": 24,
            "2024": 32
        },
        
        // Mapa interno (mock)
        mapaSala: "Sala 3 - 2º andar\nPróximo aos vestiários\nCapacidade: 30 pessoas\nPiso tatame especial"
    };
    
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- HEADER -->
        <header class="app-header" style="
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(67, 97, 238, 0.1);
            padding: 1rem 2rem;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                margin: 0 auto;
            ">
                <!-- Logo e Botão Voltar -->
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <button onclick="showHomeScreen()" style="
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        color: var(--primary);
                        cursor: pointer;
                        padding: 0.5rem;
                        border-radius: var(--radius-md);
                        transition: background-color var(--transition-normal);
                    "
                    onmouseover="this.style.backgroundColor='var(--light)'"
                    onmouseout="this.style.backgroundColor='transparent'">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="
                            background: var(--gradient-primary);
                            width: 40px;
                            height: 40px;
                            border-radius: var(--radius-md);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 1.2rem;
                        ">
                            <i class="fas fa-users"></i>
                        </div>
                        <div>
                            <div style="
                                font-family: 'Poppins', sans-serif;
                                font-weight: 700;
                                font-size: 1.3rem;
                                background: var(--gradient-primary);
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                            ">
                                Comunidade Ativa
                            </div>
                            <div style="
                                font-size: 0.85rem;
                                color: var(--gray);
                                margin-top: 2px;
                            ">
                                Unidade Einstein
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Ações Rápidas -->
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <button class="btn btn-outline" onclick="toggleFavorite(${course.id})" style="
                        padding: 0.75rem 1.5rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    ">
                        <i class="fas fa-heart" id="favorite-icon"></i>
                        Favoritar
                    </button>
                    
                    <button class="btn btn-accent" onclick="showInterestForm(${course.id})" style="
                        padding: 0.75rem 1.5rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    ">
                        <i class="fas fa-hand-paper"></i>
                        Tenho Interesse
                    </button>
                </div>
            </div>
        </header>
        
        <!-- MAIN CONTENT -->
        <main style="
            margin-top: 80px;
            padding: 2rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            padding-bottom: 100px;
        ">
            <!-- Hero do Curso -->
            <section class="animate-fade-up" style="
                background: var(--gradient-primary);
                border-radius: var(--radius-xl);
                padding: 3rem;
                color: white;
                margin-bottom: 3rem;
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-lg);
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%);
                "></div>
                
                <div style="position: relative; z-index: 1;">
                    <div style="
                        display: inline-block;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(5px);
                        color: white;
                        padding: 0.5rem 1.5rem;
                        border-radius: var(--radius-full);
                        font-size: 0.9rem;
                        font-weight: 600;
                        margin-bottom: 1rem;
                    ">
                        <i class="fas fa-fist-raised"></i> ${course.category}
                    </div>
                    
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 2.8rem;
                        font-weight: 800;
                        margin-bottom: 1rem;
                        line-height: 1.2;
                    ">
                        ${course.title}
                    </h1>
                    
                    <p style="
                        font-size: 1.2rem;
                        opacity: 0.9;
                        max-width: 800px;
                        margin-bottom: 2rem;
                        line-height: 1.6;
                    ">
                        ${course.description}
                    </p>
                    
                    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="
                                width: 50px;
                                height: 50px;
                                border-radius: var(--radius-md);
                                background: rgba(255, 255, 255, 0.2);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 1.2rem;
                            ">
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">${course.rating}</div>
                                <div style="font-size: 0.9rem; opacity: 0.8;">${course.totalAvaliacoes} avaliações</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="
                                width: 50px;
                                height: 50px;
                                border-radius: var(--radius-md);
                                background: rgba(255, 255, 255, 0.2);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 1.2rem;
                            ">
                                <i class="fas fa-users"></i>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">${course.totalFavoritos}</div>
                                <div style="font-size: 0.9rem; opacity: 0.8;">favoritaram</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="
                                width: 50px;
                                height: 50px;
                                border-radius: var(--radius-md);
                                background: rgba(255, 255, 255, 0.2);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 1.2rem;
                            ">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">74</div>
                                <div style="font-size: 0.9rem; opacity: 0.8;">alunos formados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Grid de Informações -->
            <div style="
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 3rem;
                margin-bottom: 3rem;
            ">
                <!-- Coluna Esquerda - Informações Detalhadas -->
                <div>
                    <!-- Detalhes do Curso -->
                    <section class="animate-fade-up" style="margin-bottom: 3rem;">
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.8rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 1.5rem;
                            display: flex;
                            align-items: center;
                            gap: 0.75rem;
                        ">
                            <div style="
                                width: 40px;
                                height: 40px;
                                border-radius: var(--radius-md);
                                background: var(--gradient-primary);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                            ">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            Informações do Curso
                        </h2>
                        
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 2rem;
                            box-shadow: var(--shadow-md);
                        ">
                            <div style="
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);
                                gap: 1.5rem;
                            ">
                                ${Object.entries(course.details).map(([key, value]) => {
                                    const icons = {
                                        idadeMinima: 'fas fa-child',
                                        idadeMaxima: 'fas fa-user',
                                        dias: 'fas fa-calendar-alt',
                                        horario: 'fas fa-clock',
                                        duracao: 'fas fa-hourglass-half',
                                        vagas: 'fas fa-users',
                                        vagasDisponiveis: 'fas fa-user-check',
                                        preco: 'fas fa-tag',
                                        local: 'fas fa-map-marker-alt'
                                    };
                                    
                                    const labels = {
                                        idadeMinima: 'Idade Mínima',
                                        idadeMaxima: 'Idade Máxima',
                                        dias: 'Dias da Semana',
                                        horario: 'Horário',
                                        duracao: 'Duração',
                                        vagas: 'Total de Vagas',
                                        vagasDisponiveis: 'Vagas Disponíveis',
                                        preco: 'Investimento',
                                        local: 'Localização'
                                    };
                                    
                                    return `
                                        <div style="
                                            display: flex;
                                            align-items: flex-start;
                                            gap: 1rem;
                                            padding: 1rem;
                                            background: var(--light);
                                            border-radius: var(--radius-md);
                                            transition: transform var(--transition-normal);
                                        "
                                        onmouseover="this.style.transform='translateY(-5px)'"
                                        onmouseout="this.style.transform='translateY(0)'">
                                            <div style="
                                                width: 40px;
                                                height: 40px;
                                                border-radius: var(--radius-md);
                                                background: var(--gradient-primary);
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                color: white;
                                                flex-shrink: 0;
                                            ">
                                                <i class="${icons[key]}"></i>
                                            </div>
                                            <div>
                                                <div style="
                                                    font-size: 0.9rem;
                                                    color: var(--gray);
                                                    margin-bottom: 0.25rem;
                                                ">
                                                    ${labels[key]}
                                                </div>
                                                <div style="
                                                    font-weight: 700;
                                                    color: var(--dark);
                                                    font-size: 1.1rem;
                                                ">
                                                    ${Array.isArray(value) ? value.join(', ') : value}
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </section>
                    
                    <!-- Objetivos e Benefícios -->
                    <section class="animate-fade-up" style="margin-bottom: 3rem;">
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.8rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 1.5rem;
                        ">
                            O que você vai aprender
                        </h2>
                        
                        <div style="
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 2rem;
                        ">
                            <!-- Objetivos -->
                            <div style="
                                background: white;
                                border-radius: var(--radius-lg);
                                padding: 2rem;
                                box-shadow: var(--shadow-md);
                            ">
                                <h3 style="
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.3rem;
                                    font-weight: 700;
                                    color: var(--primary);
                                    margin-bottom: 1rem;
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                ">
                                    <i class="fas fa-bullseye"></i> Objetivos
                                </h3>
                                <ul style="list-style: none; padding: 0;">
                                    ${course.objetivos.map(obj => `
                                        <li style="
                                            padding: 0.75rem 0;
                                            border-bottom: 1px solid var(--light);
                                            display: flex;
                                            align-items: flex-start;
                                            gap: 0.75rem;
                                        ">
                                            <i class="fas fa-check" style="color: var(--success); margin-top: 0.25rem;"></i>
                                            <span style="color: var(--dark);">${obj}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <!-- Benefícios -->
                            <div style="
                                background: white;
                                border-radius: var(--radius-lg);
                                padding: 2rem;
                                box-shadow: var(--shadow-md);
                            ">
                                <h3 style="
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.3rem;
                                    font-weight: 700;
                                    color: var(--success);
                                    margin-bottom: 1rem;
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                ">
                                    <i class="fas fa-gift"></i> Benefícios
                                </h3>
                                <ul style="list-style: none; padding: 0;">
                                    ${course.beneficios.map(ben => `
                                        <li style="
                                            padding: 0.75rem 0;
                                            border-bottom: 1px solid var(--light);
                                            display: flex;
                                            align-items: flex-start;
                                            gap: 0.75rem;
                                        ">
                                            <i class="fas fa-star" style="color: var(--warning); margin-top: 0.25rem;"></i>
                                            <span style="color: var(--dark);">${ben}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Conteúdo Programático -->
                    <section class="animate-fade-up">
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.8rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 1.5rem;
                            display: flex;
                            align-items: center;
                            gap: 0.75rem;
                        ">
                            <div style="
                                width: 40px;
                                height: 40px;
                                border-radius: var(--radius-md);
                                background: var(--gradient-secondary);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                            ">
                                <i class="fas fa-book"></i>
                            </div>
                            Conteúdo Programático
                        </h2>
                        
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 2rem;
                            box-shadow: var(--shadow-md);
                        ">
                            ${course.conteudo.map(modulo => `
                                <div style="margin-bottom: 2rem;">
                                    <div style="
                                        display: flex;
                                        align-items: center;
                                        gap: 1rem;
                                        margin-bottom: 1rem;
                                        padding-bottom: 1rem;
                                        border-bottom: 2px solid var(--primary);
                                    ">
                                        <div style="
                                            width: 40px;
                                            height: 40px;
                                            border-radius: var(--radius-md);
                                            background: var(--gradient-primary);
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            color: white;
                                            font-weight: 700;
                                        ">
                                            ${modulo.modulo}
                                        </div>
                                        <div style="
                                            font-family: 'Poppins', sans-serif;
                                            font-size: 1.2rem;
                                            font-weight: 700;
                                            color: var(--dark);
                                        ">
                                            Módulo ${modulo.modulo}
                                        </div>
                                    </div>
                                    
                                    <div style="
                                        display: grid;
                                        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                                        gap: 0.75rem;
                                    ">
                                        ${modulo.topicos.map(topico => `
                                            <div style="
                                                background: var(--light);
                                                padding: 0.75rem 1rem;
                                                border-radius: var(--radius-md);
                                                font-size: 0.95rem;
                                                color: var(--dark);
                                                transition: all var(--transition-normal);
                                                border-left: 3px solid var(--primary);
                                            "
                                            onmouseover="this.style.backgroundColor='#e6f0ff'; this.style.transform='translateX(5px)'"
                                            onmouseout="this.style.backgroundColor='var(--light)'; this.style.transform='translateX(0)'">
                                                <i class="fas fa-circle" style="font-size: 0.5rem; color: var(--primary); margin-right: 0.5rem;"></i>
                                                ${topico}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
                
                <!-- Coluna Direita - Sidebar -->
                <div>
                    <!-- Perfil do Professor -->
                    <section class="animate-fade-up" style="margin-bottom: 2rem;">
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 2rem;
                            box-shadow: var(--shadow-md);
                        ">
                            <h3 style="
                                font-family: 'Poppins', sans-serif;
                                font-size: 1.3rem;
                                font-weight: 700;
                                color: var(--dark);
                                margin-bottom: 1.5rem;
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                            ">
                                <i class="fas fa-chalkboard-teacher"></i> Professor
                            </h3>
                            
                            <div style="text-align: center;">
                                <div style="
                                    width: 120px;
                                    height: 120px;
                                    border-radius: 50%;
                                    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
                                    margin: 0 auto 1.5rem;
                                    padding: 4px;
                                ">
                                    <img src="${course.instructorPhoto}" alt="${course.instructor}" style="
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 50%;
                                        object-fit: cover;
                                        border: 3px solid white;
                                    ">
                                </div>
                                
                                <h4 style="
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.4rem;
                                    font-weight: 700;
                                    color: var(--dark);
                                    margin-bottom: 0.5rem;
                                ">
                                    ${course.instructor}
                                </h4>
                                
                                <div style="
                                    background: var(--light);
                                    color: var(--primary);
                                    padding: 0.5rem 1rem;
                                    border-radius: var(--radius-full);
                                    font-weight: 600;
                                    margin-bottom: 1rem;
                                    display: inline-block;
                                ">
                                    <i class="fas fa-medal"></i> ${course.instructorRank}
                                </div>
                                
                                <p style="
                                    color: var(--gray);
                                    line-height: 1.6;
                                    margin-bottom: 1.5rem;
                                ">
                                    ${course.instructorExperience} • 250+ alunos formados
                                </p>
                                
                                <button class="btn btn-outline" style="width: 100%;" onclick="alert('Ver perfil completo do professor')">
                                    <i class="fas fa-user"></i> Ver Perfil Completo
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Mapa da Sala -->
                    <section class="animate-fade-up" style="margin-bottom: 2rem;">
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 2rem;
                            box-shadow: var(--shadow-md);
                        ">
                            <h3 style="
                                font-family: 'Poppins', sans-serif;
                                font-size: 1.3rem;
                                font-weight: 700;
                                color: var(--dark);
                                margin-bottom: 1.5rem;
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                            ">
                                <i class="fas fa-map"></i> Localização Interna
                            </h3>
                            
                            <div style="
                                background: linear-gradient(135deg, var(--light) 0%, #e2e8f0 100%);
                                border-radius: var(--radius-md);
                                padding: 1.5rem;
                                text-align: center;
                                margin-bottom: 1.5rem;
                                border: 2px dashed var(--primary-light);
                            ">
                                <div style="
                                    font-size: 3rem;
                                    color: var(--primary);
                                    margin-bottom: 1rem;
                                ">
                                    <i class="fas fa-door-open"></i>
                                </div>
                                <div style="
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.5rem;
                                    font-weight: 700;
                                    color: var(--dark);
                                    margin-bottom: 0.5rem;
                                ">
                                    Sala 3
                                </div>
                                <div style="color: var(--gray); line-height: 1.6; white-space: pre-line;">
                                    ${course.mapaSala}
                                </div>
                            </div>
                            
                            <button class="btn btn-secondary" style="width: 100%;" onclick="alert('Mapa interativo será implementado')">
                                <i class="fas fa-directions"></i> Ver Mapa Completo
                            </button>
                        </div>
                    </section>
                    
                    <!-- Ações Rápidas -->
                    <section class="animate-fade-up">
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 2rem;
                            box-shadow: var(--shadow-md);
                        ">
                            <h3 style="
                                font-family: 'Poppins', sans-serif;
                                font-size: 1.3rem;
                                font-weight: 700;
                                color: var(--dark);
                                margin-bottom: 1.5rem;
                            ">
                                Ações Rápidas
                            </h3>
                            
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <button class="btn btn-accent" onclick="showInterestForm(${course.id})">
                                    <i class="fas fa-hand-paper"></i> Tenho Interesse
                                </button>
                                
                                <button class="btn btn-primary" onclick="toggleFavorite(${course.id})" id="favorite-sidebar">
                                    <i class="fas fa-heart"></i> Adicionar aos Favoritos
                                </button>
                                
                                <button class="btn btn-secondary" onclick="shareCourse(${course.id})">
                                    <i class="fas fa-share-alt"></i> Compartilhar com Amigos
                                </button>
                                
                                <button class="btn btn-outline" onclick="showSchedule()">
                                    <i class="fas fa-calendar-alt"></i> Ver Agenda de Aulas
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <!-- Gráfico de Alunos Formados -->
            <section class="animate-fade-up">
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                ">
                    <div style="
                        width: 40px;
                        height: 40px;
                        border-radius: var(--radius-md);
                        background: var(--gradient-success);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    ">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    Alunos Formados por Ano
                </h2>
                
                <div style="
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    box-shadow: var(--shadow-md);
                ">
                    <div style="
                        display: flex;
                        justify-content: space-around;
                        align-items: flex-end;
                        height: 200px;
                        margin-bottom: 2rem;
                        padding: 1rem;
                        border-bottom: 1px solid var(--light);
                    ">
                        ${Object.entries(course.formadosPorAno).map(([ano, quantidade]) => {
                            const altura = (quantidade / 35) * 150; // Normalizar para 150px max
                            return `
                                <div style="text-align: center;">
                                    <div style="
                                        width: 60px;
                                        height: ${altura}px;
                                        background: var(--gradient-primary);
                                        border-radius: var(--radius-md) var(--radius-md) 0 0;
                                        margin: 0 auto 1rem;
                                        transition: transform var(--transition-normal);
                                    "
                                    onmouseover="this.style.transform='translateY(-10px)'"
                                    onmouseout="this.style.transform='translateY(0)'">
                                    </div>
                                    <div style="font-weight: 700; color: var(--dark);">${quantidade}</div>
                                    <div style="color: var(--gray); font-size: 0.9rem;">${ano}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="
                            display: inline-block;
                            background: var(--light);
                            padding: 1rem 2rem;
                            border-radius: var(--radius-full);
                            color: var(--primary);
                            font-weight: 600;
                        ">
                            <i class="fas fa-trophy"></i> Crescimento de 78% em 3 anos
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- BOTTOM NAV -->
        <nav style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(67, 97, 238, 0.1);
            padding: 0.75rem 0;
            z-index: 1000;
        ">
            <div style="
                display: flex;
                justify-content: center;
                max-width: 1200px;
                margin: 0 auto;
                gap: 2rem;
            ">
                <button class="btn btn-primary" style="flex: 1; max-width: 400px;" onclick="showInterestForm(${course.id})">
                    <i class="fas fa-hand-paper"></i> Demonstrar Interesse
                </button>
                
                <button class="btn btn-accent" style="flex: 1; max-width: 400px;" onclick="alert('Chat com professor iniciado')">
                    <i class="fas fa-comments"></i> Conversar com Professor
                </button>
            </div>
        </nav>
    `;
}

// Funções auxiliares para a tela de detalhes
function toggleFavorite(courseId) {
    const favoriteBtn = document.getElementById('favorite-icon');
    const sidebarBtn = document.getElementById('favorite-sidebar');
    
    if (favoriteBtn.innerHTML.includes('fas fa-heart')) {
        favoriteBtn.className = 'fas fa-heart-broken';
        if (sidebarBtn) sidebarBtn.innerHTML = '<i class="fas fa-heart-broken"></i> Remover dos Favoritos';
        alert('Curso removido dos favoritos!');
    } else {
        favoriteBtn.className = 'fas fa-heart';
        if (sidebarBtn) sidebarBtn.innerHTML = '<i class="fas fa-heart"></i> Adicionar aos Favoritos';
        alert('Curso adicionado aos favoritos!');
    }
}

function showInterestForm(courseId) {
    alert(`Formulário de interesse para o curso ID: ${courseId}\n\nEsta funcionalidade incluirá:\n• Coleta de dados do lead\n• Envio para o sistema\n• Confirmação por email/WhatsApp`);
}

function shareCourse(courseId) {
    alert(`Compartilhar curso ID: ${courseId}\n\nOpções de compartilhamento:\n• Link direto\n• WhatsApp\n• Email\n• Redes sociais`);
}

function showSchedule() {
    alert('Agenda de aulas completa com:\n• Calendário interativo\n• Horários disponíveis\n• Marcação de aulas experimentais');
}
