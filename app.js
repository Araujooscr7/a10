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
// ===== TELA DE PERFIL DO USUÁRIO =====
function showProfileScreen() {
    const user = mockData.currentUser || getDefaultUser();
    
    // Cursos que o usuário pratica (mock)
    const userCourses = [
        { id: 1, name: "Judo Infantil", progress: 65 },
        { id: 3, name: "Violão Popular", progress: 30 }
    ];
    
    // Favoritos do usuário (mock)
    const userFavorites = [
        { id: 2, name: "Funcional Training 50+", category: "Fitness" },
        { id: 4, name: "Salsa & Bachata Social", category: "Dança" },
        { id: 5, name: "Inglês Conversação", category: "Idiomas" }
    ];
    
    // Interesses do usuário (mock com status)
    const userInterests = [
        { 
            id: 6, 
            name: "Culinária Vegana", 
            category: "Culinária",
            status: "Em contato", // Status: Enviado, Em contato, Matriculado
            date: "15/01/2024"
        },
        { 
            id: 7, 
            name: "Dança Contemporânea", 
            category: "Dança",
            status: "Enviado",
            date: "10/01/2024"
        },
        { 
            id: 8, 
            name: "Yoga Meditativo", 
            category: "Bem-estar",
            status: "Matriculado",
            date: "05/01/2024"
        }
    ];
    
    const app = document.getElementById('app');
    const userInitials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    
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
                
                <!-- Título da Página -->
                <div>
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: var(--dark);
                    ">
                        <i class="fas fa-user-circle"></i> Meu Perfil
                    </h1>
                </div>
            </div>
        </header>
        
        <!-- MAIN CONTENT -->
        <main style="
            margin-top: 80px;
            padding: 2rem;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            padding-bottom: 100px;
        ">
            <!-- Perfil Header -->
            <section class="animate-fade-up" style="
                background: var(--gradient-primary);
                border-radius: var(--radius-xl);
                padding: 2.5rem;
                color: white;
                margin-bottom: 2rem;
                position: relative;
                overflow: hidden;
                box-shadow: var(--shadow-lg);
                text-align: center;
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
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(10px);
                        border: 4px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 1.5rem;
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: white;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    ">
                        ${userInitials}
                    </div>
                    
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 2.2rem;
                        font-weight: 800;
                        margin-bottom: 0.5rem;
                    ">
                        ${user.name}
                    </h1>
                    
                    <p style="opacity: 0.9; font-size: 1.1rem;">
                        <i class="fas fa-award"></i> Membro desde: ${user.createdAt || 'Jan 2024'}
                    </p>
                </div>
            </section>
            
            <!-- Grid de Informações -->
            <div style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin-bottom: 3rem;
            ">
                <!-- Dados Pessoais -->
                <section class="animate-fade-up">
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                        margin-bottom: 1.5rem;
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
                            <i class="fas fa-id-card"></i>
                        </div>
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.5rem;
                            font-weight: 700;
                            color: var(--dark);
                        ">
                            Dados Pessoais
                        </h2>
                    </div>
                    
                    <div style="
                        background: white;
                        border-radius: var(--radius-lg);
                        padding: 2rem;
                        box-shadow: var(--shadow-md);
                    ">
                        <!-- Nome -->
                        <div style="margin-bottom: 1.5rem;">
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 0.75rem;
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-user" style="color: var(--primary);"></i>
                                <label style="font-weight: 600; color: var(--dark);">Nome Completo</label>
                            </div>
                            <div style="
                                padding: 0.875rem;
                                background: var(--light);
                                border-radius: var(--radius-md);
                                color: var(--dark);
                                border-left: 4px solid var(--primary);
                            ">
                                ${user.name}
                            </div>
                        </div>
                        
                        <!-- Email -->
                        <div style="margin-bottom: 1.5rem;">
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 0.75rem;
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-envelope" style="color: var(--primary);"></i>
                                <label style="font-weight: 600; color: var(--dark);">E-mail</label>
                            </div>
                            <div style="
                                padding: 0.875rem;
                                background: var(--light);
                                border-radius: var(--radius-md);
                                color: var(--dark);
                                border-left: 4px solid var(--accent);
                            ">
                                ${user.email}
                            </div>
                        </div>
                        
                        <!-- WhatsApp -->
                        <div style="margin-bottom: 1.5rem;">
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 0.75rem;
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fab fa-whatsapp" style="color: #25D366;"></i>
                                <label style="font-weight: 600; color: var(--dark);">WhatsApp</label>
                            </div>
                            <div style="
                                padding: 0.875rem;
                                background: var(--light);
                                border-radius: var(--radius-md);
                                color: var(--dark);
                                border-left: 4px solid #25D366;
                            ">
                                ${user.whatsapp || '(11) 99999-9999'}
                            </div>
                        </div>
                        
                        <!-- Idade -->
                        <div style="margin-bottom: 1.5rem;">
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 0.75rem;
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-birthday-cake" style="color: var(--warning);"></i>
                                <label style="font-weight: 600; color: var(--dark);">Idade</label>
                            </div>
                            <div style="
                                padding: 0.875rem;
                                background: var(--light);
                                border-radius: var(--radius-md);
                                color: var(--dark);
                                border-left: 4px solid var(--warning);
                            ">
                                ${user.age || '28 anos'}
                            </div>
                        </div>
                        
                        <!-- Senha -->
                        <div>
                            <div style="
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                margin-bottom: 0.5rem;
                            ">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-lock" style="color: var(--dark);"></i>
                                    <label style="font-weight: 600; color: var(--dark);">Senha da Conta</label>
                                </div>
                                <button onclick="togglePasswordVisibility()" style="
                                    background: none;
                                    border: none;
                                    color: var(--primary);
                                    cursor: pointer;
                                    font-size: 0.9rem;
                                    display: flex;
                                    align-items: center;
                                    gap: 0.25rem;
                                ">
                                    <i class="fas fa-eye" id="password-eye"></i>
                                    <span id="password-text">Mostrar</span>
                                </button>
                            </div>
                            <div style="
                                padding: 0.875rem;
                                background: var(--light);
                                border-radius: var(--radius-md);
                                color: var(--dark);
                                border-left: 4px solid var(--dark);
                                font-family: monospace;
                            " id="password-field">
                                ••••••••
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Cursos que Pratica -->
                <section class="animate-fade-up">
                    <div style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 1.5rem;
                    ">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
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
                                <i class="fas fa-dumbbell"></i>
                            </div>
                            <h2 style="
                                font-family: 'Poppins', sans-serif;
                                font-size: 1.5rem;
                                font-weight: 700;
                                color: var(--dark);
                            ">
                                Cursos que Pratica
                            </h2>
                        </div>
                        
                        <span style="
                            background: var(--light);
                            color: var(--primary);
                            padding: 0.25rem 0.75rem;
                            border-radius: var(--radius-full);
                            font-weight: 600;
                        ">
                            ${userCourses.length} cursos
                        </span>
                    </div>
                    
                    <div style="
                        background: white;
                        border-radius: var(--radius-lg);
                        padding: 2rem;
                        box-shadow: var(--shadow-md);
                        height: 100%;
                    ">
                        ${userCourses.length > 0 ? `
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                ${userCourses.map(course => `
                                    <div style="
                                        padding: 1.25rem;
                                        background: var(--light);
                                        border-radius: var(--radius-md);
                                        border-left: 4px solid var(--success);
                                        transition: transform var(--transition-normal);
                                    "
                                    onmouseover="this.style.transform='translateX(5px)'"
                                    onmouseout="this.style.transform='translateX(0)'"
                                    onclick="showCourseDetail(${course.id})">
                                        <div style="
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            margin-bottom: 0.75rem;
                                        ">
                                            <h3 style="
                                                font-family: 'Poppins', sans-serif;
                                                font-weight: 700;
                                                color: var(--dark);
                                                font-size: 1.1rem;
                                            ">
                                                ${course.name}
                                            </h3>
                                            <span style="
                                                background: var(--success);
                                                color: white;
                                                padding: 0.25rem 0.75rem;
                                                border-radius: var(--radius-full);
                                                font-size: 0.85rem;
                                                font-weight: 600;
                                            ">
                                                ${course.progress}%
                                            </span>
                                        </div>
                                        
                                        <div style="
                                            height: 6px;
                                            background: #e2e8f0;
                                            border-radius: var(--radius-full);
                                            overflow: hidden;
                                            margin-bottom: 0.5rem;
                                        ">
                                            <div style="
                                                height: 100%;
                                                width: ${course.progress}%;
                                                background: var(--gradient-success);
                                                border-radius: var(--radius-full);
                                            "></div>
                                        </div>
                                        
                                        <div style="
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            color: var(--gray);
                                            font-size: 0.9rem;
                                        ">
                                            <span>
                                                <i class="fas fa-chart-line"></i> Progresso
                                            </span>
                                            <button onclick="event.stopPropagation(); continueCourse(${course.id})" style="
                                                background: none;
                                                border: none;
                                                color: var(--primary);
                                                cursor: pointer;
                                                font-weight: 600;
                                                display: flex;
                                                align-items: center;
                                                gap: 0.25rem;
                                                padding: 0.25rem 0.5rem;
                                                border-radius: var(--radius-md);
                                                transition: background-color var(--transition-normal);
                                            "
                                            onmouseover="this.style.backgroundColor='rgba(37, 99, 235, 0.1)'"
                                            onmouseout="this.style.backgroundColor='transparent'">
                                                Continuar <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <div style="
                                text-align: center;
                                padding: 3rem 1rem;
                                color: var(--gray);
                            ">
                                <div style="font-size: 3rem; color: var(--light); margin-bottom: 1rem;">
                                    <i class="fas fa-book-open"></i>
                                </div>
                                <h3 style="
                                    font-family: 'Poppins', sans-serif;
                                    font-weight: 600;
                                    color: var(--dark);
                                    margin-bottom: 0.5rem;
                                ">
                                    Nenhum curso em andamento
                                </h3>
                                <p style="margin-bottom: 1.5rem;">
                                    Comece um novo curso e aparecerá aqui!
                                </p>
                                <button class="btn btn-primary" onclick="showCoursesScreen()">
                                    <i class="fas fa-search"></i> Explorar Cursos
                                </button>
                            </div>
                        `}
                    </div>
                </section>
            </div>
            
            <!-- Ações do Perfil -->
            <section class="animate-fade-up">
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
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
                        <i class="fas fa-bolt"></i>
                    </div>
                    Ações Rápidas
                </h2>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                ">
                    <!-- Meus Interesses -->
                    <div class="action-card" onclick="showMyInterests()" style="
                        text-align: center;
                        padding: 2rem;
                        border: 2px solid var(--primary-light);
                    ">
                        <div style="
                            font-size: 2.5rem;
                            color: var(--primary);
                            margin-bottom: 1rem;
                        ">
                            <i class="fas fa-hand-paper"></i>
                        </div>
                        <h3 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.3rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            Meus Interesses
                        </h3>
                        <p style="color: var(--gray); margin-bottom: 1.5rem;">
                            ${userInterests.length} cursos com interesse
                        </p>
                        <div style="
                            background: var(--light);
                            padding: 0.5rem;
                            border-radius: var(--radius-md);
                            margin-bottom: 1rem;
                        ">
                            <div style="
                                display: flex;
                                justify-content: center;
                                gap: 0.5rem;
                                flex-wrap: wrap;
                            ">
                                ${userInterests.map(interest => `
                                    <span style="
                                        background: ${getStatusColor(interest.status)};
                                        color: white;
                                        padding: 0.25rem 0.5rem;
                                        border-radius: var(--radius-full);
                                        font-size: 0.75rem;
                                        font-weight: 600;
                                    ">
                                        ${interest.status}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <button class="btn btn-primary">
                            Ver Todos <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    
                    <!-- Cursos Favoritados -->
                    <div class="action-card" onclick="showMyFavorites()" style="
                        text-align: center;
                        padding: 2rem;
                        border: 2px solid var(--accent-light);
                    ">
                        <div style="
                            font-size: 2.5rem;
                            color: var(--accent);
                            margin-bottom: 1rem;
                        ">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.3rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            Cursos Favoritados
                        </h3>
                        <p style="color: var(--gray); margin-bottom: 1.5rem;">
                            ${userFavorites.length} cursos salvos
                        </p>
                        <div style="
                            background: var(--light);
                            padding: 0.5rem;
                            border-radius: var(--radius-md);
                            margin-bottom: 1rem;
                        ">
                            <div style="
                                display: flex;
                                justify-content: center;
                                gap: 0.5rem;
                                flex-wrap: wrap;
                            ">
                                ${userFavorites.map(fav => `
                                    <span style="
                                        background: var(--accent-light);
                                        color: var(--accent);
                                        padding: 0.25rem 0.5rem;
                                        border-radius: var(--radius-full);
                                        font-size: 0.75rem;
                                        font-weight: 600;
                                    ">
                                        ${fav.category}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <button class="btn btn-accent">
                            Ver Favoritos <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    
                    <!-- Configurações -->
                    <div class="action-card" onclick="showSettings()" style="
                        text-align: center;
                        padding: 2rem;
                        border: 2px solid var(--gray-light);
                    ">
                        <div style="
                            font-size: 2.5rem;
                            color: var(--gray);
                            margin-bottom: 1rem;
                        ">
                            <i class="fas fa-cog"></i>
                        </div>
                        <h3 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.3rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            Configurações
                        </h3>
                        <p style="color: var(--gray); margin-bottom: 1.5rem;">
                            Editar dados e preferências
                        </p>
                        <button class="btn btn-outline">
                            Configurar <i class="fas fa-sliders-h"></i>
                        </button>
                    </div>
                    
                    <!-- Sair -->
                    <div class="action-card" onclick="handleLogout()" style="
                        text-align: center;
                        padding: 2rem;
                        border: 2px solid var(--danger-light);
                        cursor: pointer;
                    ">
                        <div style="
                            font-size: 2.5rem;
                            color: var(--danger);
                            margin-bottom: 1rem;
                        ">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                        <h3 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.3rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            Sair da Conta
                        </h3>
                        <p style="color: var(--gray); margin-bottom: 1.5rem;">
                            Encerrar sessão atual
                        </p>
                        <button class="btn btn-danger">
                            Sair <i class="fas fa-sign-out-alt"></i>
                        </button>
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
                justify-content: space-around;
                max-width: 500px;
                margin: 0 auto;
            ">
                ${getProfileBottomNavHTML()}
            </div>
        </nav>
    `;
}

// ===== FUNÇÕES AUXILIARES DO PERFIL =====

// Função para obter usuário padrão
function getDefaultUser() {
    return {
        name: "João Silva",
        email: "aluno@email.com",
        whatsapp: "(11) 98888-8888",
        age: "28 anos",
        createdAt: "Jan 2024"
    };
}

// Função para obter cor do status
function getStatusColor(status) {
    const colors = {
        'Enviado': 'var(--primary)',
        'Em contato': 'var(--warning)',
        'Matriculado': 'var(--success)'
    };
    return colors[status] || 'var(--gray)';
}

// Alternar visibilidade da senha
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password-field');
    const passwordEye = document.getElementById('password-eye');
    const passwordText = document.getElementById('password-text');
    
    if (passwordField.textContent === '••••••••') {
        passwordField.textContent = 'aluno123';
        passwordEye.className = 'fas fa-eye-slash';
        passwordText.textContent = 'Ocultar';
    } else {
        passwordField.textContent = '••••••••';
        passwordEye.className = 'fas fa-eye';
        passwordText.textContent = 'Mostrar';
    }
}

// Mostrar Meus Interesses
function showMyInterests() {
    alert('Tela "Meus Interesses" será implementada com:\n• Lista de cursos interessados\n• Status: Enviado, Em contato, Matriculado\n• Histórico de interações');
}

// Mostrar Meus Favoritos
function showMyFavorites() {
    alert('Tela "Meus Favoritos" será implementada com:\n• Lista completa de cursos favoritados\n• Organização por categoria\n• Acesso rápido aos cursos');
}

// Mostrar Configurações
function showSettings() {
    alert('Tela "Configurações" será implementada com:\n• Edição de dados pessoais\n• Configurações de notificação\n• Privacidade e segurança\n• Opção de excluir conta');
}

// Logout
function handleLogout() {
    if (confirm('Tem certeza que deseja sair da sua conta?')) {
        mockData.currentUser = null;
        showWelcomeScreen();
    }
}

// Continuar Curso
function continueCourse(courseId) {
    alert(`Continuando curso ID: ${courseId}\n\nRedirecionando para a próxima aula...`);
    // Na implementação real, redirecionaria para a aula
}

// Bottom Navigation específica do perfil
function getProfileBottomNavHTML() {
    return `
        <a class="nav-item" onclick="showHomeScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-home" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Home</span>
        </a>
        
        <a class="nav-item" onclick="showCoursesScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-book" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Cursos</span>
        </a>
        
        <a class="nav-item" onclick="showFavoritesScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
            position: relative;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-heart" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Favoritos</span>
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
                3
            </span>
        </a>
        
        <a class="nav-item active" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--primary);
            text-decoration: none;
            min-width: 70px;
            background: var(--light);
        ">
            <i class="fas fa-user" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Perfil</span>
        </a>
    `;
}
// ===== TELA DE FAVORITOS =====
function showFavoritesScreen() {
    const user = mockData.currentUser || getDefaultUser();
    
    // Dados mockados dos cursos favoritados
    const favoriteCourses = [
        {
            id: 2,
            title: "Funcional Training 50+",
            category: "Fitness",
            description: "Exercícios adaptados para melhorar mobilidade, força e qualidade de vida na melhor idade.",
            icon: "fas fa-running",
            rating: 4.7,
            students: 28,
            status: "ativo", // ativo, concluído, em_andamento
            addedDate: "15/01/2024",
            instructor: "Prof. Ana Costa"
        },
        {
            id: 4,
            title: "Salsa & Bachata Social",
            category: "Dança",
            description: "Aprenda os passos básicos e entre no mundo da dança latina. Aulas práticas com música ao vivo.",
            icon: "fas fa-heart",
            rating: 4.6,
            students: 18,
            status: "ativo",
            addedDate: "12/01/2024",
            instructor: "Prof. Carlos Mendez"
        },
        {
            id: 5,
            title: "Inglês Conversação - Intermediário",
            category: "Idiomas",
            description: "Pratique speaking e listening com professores nativos em situações do dia a dia.",
            icon: "fas fa-globe-americas",
            rating: 4.7,
            students: 36,
            status: "concluído",
            addedDate: "10/01/2024",
            instructor: "Prof. Sarah Johnson"
        },
        {
            id: 9,
            title: "Yoga Meditativo",
            category: "Bem-estar",
            description: "Pratique posturas de yoga combinadas com técnicas de meditação para redução do estresse.",
            icon: "fas fa-spa",
            rating: 4.9,
            students: 42,
            status: "em_andamento",
            addedDate: "08/01/2024",
            instructor: "Prof. Mariana Silva"
        },
        {
            id: 10,
            title: "Fotografia Digital Básica",
            category: "Artes",
            description: "Aprenda os fundamentos da fotografia digital, composição e edição de imagens.",
            icon: "fas fa-camera",
            rating: 4.8,
            students: 25,
            status: "ativo",
            addedDate: "05/01/2024",
            instructor: "Prof. Ricardo Alves"
        }
    ];
    
    // Contar por categoria
    const categoryCount = {};
    favoriteCourses.forEach(course => {
        categoryCount[course.category] = (categoryCount[course.category] || 0) + 1;
    });
    
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
                
                <!-- Título com Contador -->
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: var(--dark);
                    ">
                        <i class="fas fa-heart" style="color: var(--accent);"></i> Meus Favoritos
                    </h1>
                    <span style="
                        background: var(--gradient-accent);
                        color: white;
                        padding: 0.25rem 0.75rem;
                        border-radius: var(--radius-full);
                        font-weight: 700;
                        font-size: 0.9rem;
                    ">
                        ${favoriteCourses.length} cursos
                    </span>
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
            <!-- Header com Filtros -->
            <section class="animate-fade-up" style="margin-bottom: 2.5rem;">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    box-shadow: var(--shadow-md);
                ">
                    <div>
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.8rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            Cursos Salvos
                        </h2>
                        <p style="color: var(--gray);">
                            Gerencie seus cursos favoritos e acesse rapidamente
                        </p>
                    </div>
                    
                    <!-- Filtros -->
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <select style="
                            padding: 0.75rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.95rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                            min-width: 180px;
                        "
                        onchange="filterFavorites('category', this.value)"
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Todas as categorias</option>
                            ${Object.keys(categoryCount).map(cat => `
                                <option value="${cat}">${cat} (${categoryCount[cat]})</option>
                            `).join('')}
                        </select>
                        
                        <select style="
                            padding: 0.75rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.95rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                            min-width: 180px;
                        "
                        onchange="filterFavorites('status', this.value)"
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Todos os status</option>
                            <option value="ativo">Ativos</option>
                            <option value="em_andamento">Em andamento</option>
                            <option value="concluído">Concluídos</option>
                        </select>
                        
                        <button class="btn btn-outline" onclick="clearFavoritesFilters()">
                            <i class="fas fa-filter-circle-xmark"></i> Limpar Filtros
                        </button>
                    </div>
                </div>
            </section>
            
            <!-- Lista de Favoritos -->
            <section class="animate-fade-up">
                ${favoriteCourses.length > 0 ? `
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        ${favoriteCourses.map(course => `
                            <div class="favorite-card" data-category="${course.category}" data-status="${course.status}" style="
                                background: white;
                                border-radius: var(--radius-lg);
                                overflow: hidden;
                                box-shadow: var(--shadow-md);
                                transition: all var(--transition-normal);
                                border: 2px solid transparent;
                            "
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-lg)'; this.style.borderColor='${getCategoryColor(course.category)}'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'; this.style.borderColor='transparent'">
                                <div style="
                                    display: grid;
                                    grid-template-columns: auto 1fr auto;
                                    gap: 1.5rem;
                                    padding: 1.5rem;
                                    align-items: center;
                                ">
                                    <!-- Ícone e Status -->
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        gap: 1rem;
                                        min-width: 100px;
                                    ">
                                        <div style="
                                            width: 70px;
                                            height: 70px;
                                            border-radius: var(--radius-lg);
                                            background: ${getCategoryGradient(course.category)};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            color: white;
                                            font-size: 1.8rem;
                                            box-shadow: 0 4px 12px ${getCategoryShadow(course.category)};
                                        ">
                                            <i class="${course.icon}"></i>
                                        </div>
                                        
                                        <span style="
                                            background: ${getStatusBackground(course.status)};
                                            color: ${getStatusColor(course.status)};
                                            padding: 0.25rem 0.75rem;
                                            border-radius: var(--radius-full);
                                            font-size: 0.8rem;
                                            font-weight: 700;
                                            text-transform: uppercase;
                                            letter-spacing: 0.5px;
                                        ">
                                            ${getStatusText(course.status)}
                                        </span>
                                    </div>
                                    
                                    <!-- Informações do Curso -->
                                    <div>
                                        <div style="
                                            display: inline-block;
                                            background: ${getCategoryColor(course.category)}15;
                                            color: ${getCategoryColor(course.category)};
                                            padding: 0.25rem 0.75rem;
                                            border-radius: var(--radius-full);
                                            font-size: 0.85rem;
                                            font-weight: 600;
                                            margin-bottom: 0.5rem;
                                        ">
                                            ${course.category}
                                        </div>
                                        
                                        <h3 style="
                                            font-family: 'Poppins', sans-serif;
                                            font-size: 1.4rem;
                                            font-weight: 700;
                                            color: var(--dark);
                                            margin-bottom: 0.5rem;
                                            line-height: 1.3;
                                        ">
                                            ${course.title}
                                        </h3>
                                        
                                        <p style="
                                            color: var(--gray);
                                            line-height: 1.6;
                                            margin-bottom: 1rem;
                                            font-size: 0.95rem;
                                        ">
                                            ${course.description}
                                        </p>
                                        
                                        <div style="
                                            display: flex;
                                            align-items: center;
                                            gap: 1.5rem;
                                            color: var(--gray);
                                            font-size: 0.9rem;
                                        ">
                                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                                <i class="fas fa-star" style="color: #f59e0b;"></i>
                                                <span style="font-weight: 600;">${course.rating}</span>
                                            </div>
                                            
                                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                                <i class="fas fa-users"></i>
                                                <span>${course.students} alunos</span>
                                            </div>
                                            
                                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                                <i class="fas fa-chalkboard-teacher"></i>
                                                <span>${course.instructor}</span>
                                            </div>
                                            
                                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                                <i class="fas fa-calendar-plus"></i>
                                                <span>Adicionado: ${course.addedDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Ações -->
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        gap: 0.75rem;
                                        min-width: 180px;
                                    ">
                                        <button class="btn btn-primary" onclick="openCourse(${course.id})">
                                            <i class="fas fa-play-circle"></i> Acessar Curso
                                        </button>
                                        
                                        <button class="btn btn-secondary" onclick="showCourseDetail(${course.id})">
                                            <i class="fas fa-info-circle"></i> Ver Detalhes
                                        </button>
                                        
                                        <button class="btn btn-outline" onclick="removeFromFavorites(${course.id}, this)">
                                            <i class="fas fa-heart-broken"></i> Remover
                                        </button>
                                        
                                        <button class="btn btn-outline" onclick="shareCourse(${course.id})" style="
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            gap: 0.5rem;
                                        ">
                                            <i class="fas fa-share-alt"></i>
                                            Compartilhar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <!-- Estado Vazio -->
                    <div style="
                        text-align: center;
                        padding: 4rem 2rem;
                        background: white;
                        border-radius: var(--radius-xl);
                        box-shadow: var(--shadow-md);
                    ">
                        <div style="
                            font-size: 4rem;
                            color: var(--light);
                            margin-bottom: 1.5rem;
                        ">
                            <i class="fas fa-heart-broken"></i>
                        </div>
                        
                        <h2 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 2rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 1rem;
                        ">
                            Nenhum curso favoritado
                        </h2>
                        
                        <p style="
                            color: var(--gray);
                            max-width: 500px;
                            margin: 0 auto 2rem;
                            line-height: 1.6;
                            font-size: 1.1rem;
                        ">
                            Você ainda não adicionou nenhum curso aos favoritos. 
                            Explore nossa variedade de cursos e salve seus preferidos 
                            para acessar rapidamente depois!
                        </p>
                        
                        <div style="display: flex; gap: 1rem; justify-content: center;">
                            <button class="btn btn-primary" onclick="showCoursesScreen()">
                                <i class="fas fa-search"></i> Explorar Cursos
                            </button>
                            
                            <button class="btn btn-accent" onclick="showHomeScreen()">
                                <i class="fas fa-home"></i> Voltar para Home
                            </button>
                        </div>
                    </div>
                `}
            </section>
            
            <!-- Estatísticas -->
            ${favoriteCourses.length > 0 ? `
                <section class="animate-fade-up" style="margin-top: 3rem;">
                    <h2 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.5rem;
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
                            <i class="fas fa-chart-pie"></i>
                        </div>
                        Estatísticas dos Favoritos
                    </h2>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 1.5rem;
                    ">
                        <!-- Total de Favoritos -->
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 1.5rem;
                            box-shadow: var(--shadow-md);
                            text-align: center;
                            border-top: 4px solid var(--primary);
                        ">
                            <div style="
                                font-size: 2.5rem;
                                color: var(--primary);
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div style="
                                font-size: 2rem;
                                font-weight: 800;
                                color: var(--dark);
                                margin-bottom: 0.25rem;
                            ">
                                ${favoriteCourses.length}
                            </div>
                            <div style="color: var(--gray); font-size: 0.9rem;">
                                Cursos Favoritados
                            </div>
                        </div>
                        
                        <!-- Por Categoria -->
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 1.5rem;
                            box-shadow: var(--shadow-md);
                            text-align: center;
                            border-top: 4px solid var(--success);
                        ">
                            <div style="
                                font-size: 2.5rem;
                                color: var(--success);
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div style="
                                font-size: 2rem;
                                font-weight: 800;
                                color: var(--dark);
                                margin-bottom: 0.25rem;
                            ">
                                ${Object.keys(categoryCount).length}
                            </div>
                            <div style="color: var(--gray); font-size: 0.9rem;">
                                Categorias Diferentes
                            </div>
                        </div>
                        
                        <!-- Mais Antigo -->
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 1.5rem;
                            box-shadow: var(--shadow-md);
                            text-align: center;
                            border-top: 4px solid var(--warning);
                        ">
                            <div style="
                                font-size: 2.5rem;
                                color: var(--warning);
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <div style="
                                font-size: 1.5rem;
                                font-weight: 800;
                                color: var(--dark);
                                margin-bottom: 0.25rem;
                                line-height: 1.2;
                            ">
                                ${favoriteCourses.reduce((oldest, current) => 
                                    new Date(current.addedDate.split('/').reverse().join('-')) < 
                                    new Date(oldest.addedDate.split('/').reverse().join('-')) ? current : oldest
                                ).addedDate}
                            </div>
                            <div style="color: var(--gray); font-size: 0.9rem;">
                                Adicionado Mais Antigo
                            </div>
                        </div>
                        
                        <!-- Status -->
                        <div style="
                            background: white;
                            border-radius: var(--radius-lg);
                            padding: 1.5rem;
                            box-shadow: var(--shadow-md);
                            text-align: center;
                            border-top: 4px solid var(--accent);
                        ">
                            <div style="
                                font-size: 2.5rem;
                                color: var(--accent);
                                margin-bottom: 0.5rem;
                            ">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div style="
                                display: flex;
                                justify-content: center;
                                gap: 0.5rem;
                                flex-wrap: wrap;
                            ">
                                <span style="
                                    background: var(--success);
                                    color: white;
                                    padding: 0.25rem 0.5rem;
                                    border-radius: var(--radius-full);
                                    font-size: 0.85rem;
                                ">
                                    ${favoriteCourses.filter(c => c.status === 'ativo').length} Ativos
                                </span>
                                <span style="
                                    background: var(--warning);
                                    color: white;
                                    padding: 0.25rem 0.5rem;
                                    border-radius: var(--radius-full);
                                    font-size: 0.85rem;
                                ">
                                    ${favoriteCourses.filter(c => c.status === 'em_andamento').length} Andamento
                                </span>
                                <span style="
                                    background: var(--primary);
                                    color: white;
                                    padding: 0.25rem 0.5rem;
                                    border-radius: var(--radius-full);
                                    font-size: 0.85rem;
                                ">
                                    ${favoriteCourses.filter(c => c.status === 'concluído').length} Concluídos
                                </span>
                            </div>
                            <div style="color: var(--gray); font-size: 0.9rem; margin-top: 0.5rem;">
                                Distribuição por Status
                            </div>
                        </div>
                    </div>
                </section>
            ` : ''}
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
                justify-content: space-around;
                max-width: 500px;
                margin: 0 auto;
            ">
                ${getFavoritesBottomNavHTML()}
            </div>
        </nav>
    `;
}

// ===== FUNÇÕES AUXILIARES DOS FAVORITOS =====

// Obter cor da categoria
function getCategoryColor(category) {
    const colors = {
        'Fitness': 'var(--success)',
        'Dança': 'var(--accent)',
        'Idiomas': 'var(--warning)',
        'Bem-estar': 'var(--primary)',
        'Artes': 'var(--secondary)',
        'Artes Marciais': 'var(--danger)',
        'Música': 'var(--info)',
        'Culinária': 'var(--purple)'
    };
    return colors[category] || 'var(--gray)';
}

// Obter gradiente da categoria
function getCategoryGradient(category) {
    const color = getCategoryColor(category);
    return `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`;
}

// Obter sombra da categoria
function getCategoryShadow(category) {
    const color = getCategoryColor(category);
    return color.replace('var(', '').replace(')', '') + '40';
}

// Obter texto do status
function getStatusText(status) {
    const texts = {
        'ativo': 'Ativo',
        'em_andamento': 'Em Andamento',
        'concluído': 'Concluído'
    };
    return texts[status] || status;
}

// Obter cor do status
function getStatusColor(status) {
    const colors = {
        'ativo': 'var(--success)',
        'em_andamento': 'var(--warning)',
        'concluído': 'var(--primary)'
    };
    return colors[status] || 'var(--gray)';
}

// Obter background do status
function getStatusBackground(status) {
    const color = getStatusColor(status);
    return color + '15'; // Adiciona transparência
}

// Filtrar favoritos
function filterFavorites(type, value) {
    const cards = document.querySelectorAll('.favorite-card');
    
    cards.forEach(card => {
        if (value === 'all') {
            card.style.display = 'block';
        } else {
            const cardValue = card.getAttribute(`data-${type}`);
            card.style.display = cardValue === value ? 'block' : 'none';
        }
    });
    
    // Feedback visual
    const total = document.querySelectorAll('.favorite-card').length;
    const visible = document.querySelectorAll('.favorite-card[style*="display: block"]').length;
    
    if (value !== 'all') {
        showNotification(`Mostrando ${visible} de ${total} cursos`, 'info');
    }
}

// Limpar filtros
function clearFavoritesFilters() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => select.value = 'all');
    
    const cards = document.querySelectorAll('.favorite-card');
    cards.forEach(card => card.style.display = 'block');
    
    showNotification('Filtros limpos', 'success');
}

// Remover dos favoritos
function removeFromFavorites(courseId, button) {
    if (confirm('Tem certeza que deseja remover este curso dos favoritos?')) {
        // Simular remoção
        const card = button.closest('.favorite-card');
        card.style.animation = 'fadeOut 0.5s forwards';
        
        setTimeout(() => {
            card.remove();
            showNotification('Curso removido dos favoritos!', 'success');
            
            // Atualizar contador
            const countElement = document.querySelector('.favorite-count');
            if (countElement) {
                const currentCount = parseInt(countElement.textContent);
                countElement.textContent = currentCount - 1;
            }
        }, 500);
    }
}

// Abrir curso
function openCourse(courseId) {
    showNotification(`Abrindo curso ID: ${courseId}...`, 'info');
    setTimeout(() => {
        showCourseDetail(courseId);
    }, 500);
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--primary)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            animation: slideInRight 0.3s, fadeOut 0.5s 2.5s forwards;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            max-width: 350px;
        ">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Bottom Navigation específica dos favoritos
function getFavoritesBottomNavHTML() {
    return `
        <a class="nav-item" onclick="showHomeScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-home" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Home</span>
        </a>
        
        <a class="nav-item" onclick="showCoursesScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-book" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Cursos</span>
        </a>
        
        <a class="nav-item active" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--accent);
            text-decoration: none;
            min-width: 70px;
            background: var(--light);
            position: relative;
        ">
            <i class="fas fa-heart" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Favoritos</span>
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
            " class="favorite-count">
                5
            </span>
        </a>
        
        <a class="nav-item" onclick="showProfileScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-user" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Perfil</span>
        </a>
    `;
}
// ===== CATÁLOGO COMPLETO DE CURSOS =====
function showCoursesScreen() {
    // Dados mockados dos cursos
    const allCourses = [
        {
            id: 1,
            title: "Judo Infantil (6-12 anos)",
            category: "Artes Marciais",
            subcategory: "Lutas",
            description: "Desenvolvimento físico e mental através das técnicas do Judô.",
            icon: "fas fa-user-ninja",
            rating: 4.8,
            students: 45,
            price: 120,
            priceType: "mensal",
            duration: "12 semanas",
            modality: "Presencial",
            level: "Iniciante",
            featured: true,
            new: false,
            vacancies: 8,
            instructor: "Prof. Carlos Silva",
            schedule: "Seg/Qua/Sex - 14:00-15:30"
        },
        {
            id: 2,
            title: "Funcional Training 50+",
            category: "Fitness",
            subcategory: "Condicionamento",
            description: "Exercícios adaptados para melhorar mobilidade e qualidade de vida.",
            icon: "fas fa-running",
            rating: 4.7,
            students: 28,
            price: 90,
            priceType: "mensal",
            duration: "16 semanas",
            modality: "Presencial",
            level: "Todos os níveis",
            featured: true,
            new: false,
            vacancies: 12,
            instructor: "Prof. Ana Costa",
            schedule: "Ter/Qui - 09:00-10:00"
        },
        {
            id: 3,
            title: "Violão Popular - Nível Iniciante",
            category: "Música",
            subcategory: "Instrumentos",
            description: "Domine os acordes básicos e toque suas músicas favoritas.",
            icon: "fas fa-guitar",
            rating: 4.9,
            students: 32,
            price: 150,
            priceType: "mensal",
            duration: "8 semanas",
            modality: "Presencial",
            level: "Iniciante",
            featured: false,
            new: true,
            vacancies: 5,
            instructor: "Prof. Marcos Lima",
            schedule: "Seg/Qua - 19:00-20:30"
        },
        {
            id: 4,
            title: "Salsa & Bachata Social",
            category: "Dança",
            subcategory: "Danças Latinas",
            description: "Aprenda os passos básicos e entre no mundo da dança latina.",
            icon: "fas fa-heart",
            rating: 4.6,
            students: 18,
            price: 100,
            priceType: "mensal",
            duration: "10 semanas",
            modality: "Presencial",
            level: "Iniciante",
            featured: false,
            new: true,
            vacancies: 15,
            instructor: "Prof. Carlos Mendez",
            schedule: "Ter/Qui - 20:00-21:30"
        },
        {
            id: 5,
            title: "Inglês Conversação - Intermediário",
            category: "Idiomas",
            subcategory: "Inglês",
            description: "Pratique speaking e listening com professores nativos.",
            icon: "fas fa-globe-americas",
            rating: 4.7,
            students: 36,
            price: 200,
            priceType: "mensal",
            duration: "24 semanas",
            modality: "Online",
            level: "Intermediário",
            featured: false,
            new: false,
            vacancies: 20,
            instructor: "Prof. Sarah Johnson",
            schedule: "Seg/Qua/Sex - 18:00-19:30"
        },
        {
            id: 6,
            title: "Culinária Vegana Básica",
            category: "Culinária",
            subcategory: "Gastronomia",
            description: "Descubra como preparar refeições saborosas sem produtos animais.",
            icon: "fas fa-carrot",
            rating: 4.8,
            students: 24,
            price: 180,
            priceType: "mensal",
            duration: "6 semanas",
            modality: "Híbrido",
            level: "Iniciante",
            featured: false,
            new: true,
            vacancies: 10,
            instructor: "Prof. Sofia Martins",
            schedule: "Sábados - 10:00-13:00"
        },
        {
            id: 7,
            title: "Yoga Meditativo",
            category: "Bem-estar",
            subcategory: "Yoga",
            description: "Pratique posturas de yoga combinadas com técnicas de meditação.",
            icon: "fas fa-spa",
            rating: 4.9,
            students: 42,
            price: 80,
            priceType: "mensal",
            duration: "12 semanas",
            modality: "Presencial",
            level: "Todos os níveis",
            featured: true,
            new: false,
            vacancies: 6,
            instructor: "Prof. Mariana Silva",
            schedule: "Ter/Qui - 07:00-08:00"
        },
        {
            id: 8,
            title: "Fotografia Digital Básica",
            category: "Artes",
            subcategory: "Fotografia",
            description: "Aprenda os fundamentos da fotografia digital e edição de imagens.",
            icon: "fas fa-camera",
            rating: 4.8,
            students: 25,
            price: 220,
            priceType: "mensal",
            duration: "14 semanas",
            modality: "Híbrido",
            level: "Iniciante",
            featured: false,
            new: false,
            vacancies: 8,
            instructor: "Prof. Ricardo Alves",
            schedule: "Qua/Sex - 19:00-21:00"
        },
        {
            id: 9,
            title: "Dança Contemporânea",
            category: "Dança",
            subcategory: "Dança Artística",
            description: "Explore a expressão corporal através da dança contemporânea.",
            icon: "fas fa-user-friends",
            rating: 4.5,
            students: 16,
            price: 110,
            priceType: "mensal",
            duration: "16 semanas",
            modality: "Presencial",
            level: "Intermediário",
            featured: false,
            new: true,
            vacancies: 12,
            instructor: "Prof. Beatriz Santos",
            schedule: "Seg/Qua - 18:00-19:30"
        },
        {
            id: 10,
            title: "Programação para Iniciantes",
            category: "Tecnologia",
            subcategory: "Programação",
            description: "Introdução aos conceitos básicos de programação e lógica.",
            icon: "fas fa-laptop-code",
            rating: 4.7,
            students: 38,
            price: 250,
            priceType: "mensal",
            duration: "20 semanas",
            modality: "Online",
            level: "Iniciante",
            featured: true,
            new: false,
            vacancies: 25,
            instructor: "Prof. João Tech",
            schedule: "Ter/Qui - 20:00-22:00"
        },
        {
            id: 11,
            title: "Tai Chi Chuan para Iniciantes",
            category: "Artes Marciais",
            subcategory: "Artes Suaves",
            description: "Arte marcial chinesa para equilíbrio físico e mental.",
            icon: "fas fa-leaf",
            rating: 4.6,
            students: 22,
            price: 95,
            priceType: "mensal",
            duration: "12 semanas",
            modality: "Presencial",
            level: "Iniciante",
            featured: false,
            new: true,
            vacancies: 10,
            instructor: "Prof. Li Wang",
            schedule: "Seg/Qua/Sex - 08:00-09:00"
        },
        {
            id: 12,
            title: "Introdução ao Piano",
            category: "Música",
            subcategory: "Instrumentos",
            description: "Aprenda as bases do piano e toque suas primeiras músicas.",
            icon: "fas fa-music",
            rating: 4.8,
            students: 20,
            price: 170,
            priceType: "mensal",
            duration: "16 semanas",
            modality: "Presencial",
            level: "Iniciante",
            featured: false,
            new: false,
            vacancies: 6,
            instructor: "Prof. Clara Keys",
            schedule: "Ter/Qui - 17:00-18:30"
        }
    ];
    
    // Categorias únicas para filtros
    const categories = [...new Set(allCourses.map(c => c.category))];
    const subcategories = [...new Set(allCourses.map(c => c.subcategory))];
    const modalities = [...new Set(allCourses.map(c => c.modality))];
    const levels = [...new Set(allCourses.map(c => c.level))];
    
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
                
                <!-- Título com Contador -->
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <h1 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: var(--dark);
                    ">
                        <i class="fas fa-book" style="color: var(--primary);"></i> Catálogo de Cursos
                    </h1>
                    <span style="
                        background: var(--gradient-primary);
                        color: white;
                        padding: 0.25rem 0.75rem;
                        border-radius: var(--radius-full);
                        font-weight: 700;
                        font-size: 0.9rem;
                    ">
                        ${allCourses.length} cursos
                    </span>
                </div>
            </div>
        </header>
        
        <!-- MAIN CONTENT -->
        <main style="
            margin-top: 80px;
            padding: 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            padding-bottom: 100px;
        ">
            <!-- Barra de Busca e Filtros -->
            <section class="animate-fade-up" style="margin-bottom: 2.5rem;">
                <div style="
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    box-shadow: var(--shadow-md);
                ">
                    <!-- Barra de Busca -->
                    <div style="margin-bottom: 1.5rem;">
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                        ">
                            <div style="position: relative; flex: 1;">
                                <i class="fas fa-search" style="
                                    position: absolute;
                                    left: 1rem;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    color: var(--gray-light);
                                "></i>
                                <input 
                                    type="text" 
                                    id="courseSearch"
                                    placeholder="Buscar por nome, categoria, professor..."
                                    style="
                                        padding: 0.875rem 1rem 0.875rem 3rem;
                                        border: 2px solid #e2e8f0;
                                        border-radius: var(--radius-full);
                                        font-family: 'Inter', sans-serif;
                                        font-size: 1rem;
                                        width: 100%;
                                        transition: all var(--transition-normal);
                                    "
                                    onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                                    onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
                                    onkeyup="searchCourses()"
                                >
                            </div>
                            
                            <!-- Visualização -->
                            <div style="display: flex; gap: 0.5rem;">
                                <button id="viewGrid" onclick="changeView('grid')" style="
                                    padding: 0.75rem;
                                    border: 2px solid var(--primary);
                                    background: var(--primary);
                                    color: white;
                                    border-radius: var(--radius-md);
                                    cursor: pointer;
                                    transition: all var(--transition-normal);
                                ">
                                    <i class="fas fa-th-large"></i>
                                </button>
                                
                                <button id="viewList" onclick="changeView('list')" style="
                                    padding: 0.75rem;
                                    border: 2px solid #e2e8f0;
                                    background: white;
                                    color: var(--gray);
                                    border-radius: var(--radius-md);
                                    cursor: pointer;
                                    transition: all var(--transition-normal);
                                "
                                onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'"
                                onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--gray)'">
                                    <i class="fas fa-list"></i>
                                </button>
                            </div>
                            
                            <!-- Ordenação -->
                            <select id="sortCourses" onchange="sortCourses()" style="
                                padding: 0.75rem 1rem;
                                border: 2px solid #e2e8f0;
                                border-radius: var(--radius-md);
                                font-family: 'Inter', sans-serif;
                                font-size: 0.95rem;
                                color: var(--dark);
                                background: white;
                                cursor: pointer;
                                transition: all var(--transition-normal);
                                min-width: 180px;
                            "
                            onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                                <option value="relevance">Ordenar por: Relevância</option>
                                <option value="rating">Maior avaliação</option>
                                <option value="price_asc">Menor preço</option>
                                <option value="price_desc">Maior preço</option>
                                <option value="newest">Mais recentes</option>
                                <option value="students">Mais populares</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- Filtros -->
                    <div style="
                        display: flex;
                        flex-wrap: wrap;
                        gap: 1rem;
                        align-items: center;
                    ">
                        <span style="
                            font-weight: 600;
                            color: var(--dark);
                            font-size: 0.95rem;
                        ">
                            <i class="fas fa-filter"></i> Filtrar por:
                        </span>
                        
                        <!-- Filtro: Categoria -->
                        <select id="filterCategory" onchange="filterCourses()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                        "
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Todas categorias</option>
                            ${categories.map(cat => `
                                <option value="${cat}">${cat}</option>
                            `).join('')}
                        </select>
                        
                        <!-- Filtro: Modalidade -->
                        <select id="filterModality" onchange="filterCourses()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                        "
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Todas modalidades</option>
                            ${modalities.map(mod => `
                                <option value="${mod}">${mod}</option>
                            `).join('')}
                        </select>
                        
                        <!-- Filtro: Preço -->
                        <select id="filterPrice" onchange="filterCourses()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                        "
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Qualquer preço</option>
                            <option value="0">Gratuito</option>
                            <option value="100">Até R$ 100</option>
                            <option value="200">Até R$ 200</option>
                            <option value="300">Até R$ 300</option>
                            <option value="300+">Acima de R$ 300</option>
                        </select>
                        
                        <!-- Filtro: Duração -->
                        <select id="filterDuration" onchange="filterCourses()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                        "
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Qualquer duração</option>
                            <option value="short">Curta (até 8 semanas)</option>
                            <option value="medium">Média (9-16 semanas)</option>
                            <option value="long">Longa (17+ semanas)</option>
                        </select>
                        
                        <!-- Filtro: Nível -->
                        <select id="filterLevel" onchange="filterCourses()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid #e2e8f0;
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            color: var(--dark);
                            background: white;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                        "
                        onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.1)'"
                        onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
                            <option value="all">Todos os níveis</option>
                            ${levels.map(lvl => `
                                <option value="${lvl}">${lvl}</option>
                            `).join('')}
                        </select>
                        
                        <!-- Botão Limpar Filtros -->
                        <button onclick="clearCourseFilters()" style="
                            padding: 0.625rem 1rem;
                            border: 2px solid var(--danger);
                            background: white;
                            color: var(--danger);
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.9rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        "
                        onmouseover="this.style.backgroundColor='var(--danger)'; this.style.color='white'"
                        onmouseout="this.style.backgroundColor='white'; this.style.color='var(--danger)'">
                            <i class="fas fa-filter-circle-xmark"></i>
                            Limpar Filtros
                        </button>
                    </div>
                </div>
            </section>
            
            <!-- Resultados e Contador -->
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            ">
                <div>
                    <h2 style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: var(--dark);
                    ">
                        Cursos Disponíveis
                    </h2>
                    <p style="color: var(--gray); font-size: 0.95rem;">
                        Encontre o curso perfeito para você
                    </p>
                </div>
                
                <div id="resultsCount" style="
                    background: var(--light);
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    color: var(--primary);
                ">
                    ${allCourses.length} cursos encontrados
                </div>
            </div>
            
            <!-- Lista de Cursos (GRID por padrão) -->
            <section id="coursesContainer" class="animate-fade-up">
                <div id="coursesGrid" style="
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                ">
                    ${allCourses.map(course => createCourseCardHTML(course, 'grid')).join('')}
                </div>
                
                <!-- Versão LISTA (hidden por padrão) -->
                <div id="coursesList" style="display: none; flex-direction: column; gap: 1.5rem;">
                    ${allCourses.map(course => createCourseCardHTML(course, 'list')).join('')}
                </div>
            </section>
            
            <!-- Paginação -->
            ${allCourses.length > 6 ? `
                <section class="animate-fade-up" style="margin-top: 3rem;">
                    <div style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                    ">
                        <button onclick="previousPage()" style="
                            padding: 0.75rem 1.25rem;
                            border: 2px solid #e2e8f0;
                            background: white;
                            color: var(--gray);
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.95rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        "
                        onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--gray)'">
                            <i class="fas fa-chevron-left"></i>
                            Anterior
                        </button>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="page-btn active" onclick="goToPage(1)" style="
                                width: 40px;
                                height: 40px;
                                border: 2px solid var(--primary);
                                background: var(--primary);
                                color: white;
                                border-radius: var(--radius-md);
                                font-weight: 700;
                                cursor: pointer;
                                transition: all var(--transition-normal);
                            ">
                                1
                            </button>
                            
                            <button class="page-btn" onclick="goToPage(2)" style="
                                width: 40px;
                                height: 40px;
                                border: 2px solid #e2e8f0;
                                background: white;
                                color: var(--gray);
                                border-radius: var(--radius-md);
                                font-weight: 600;
                                cursor: pointer;
                                transition: all var(--transition-normal);
                            "
                            onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'"
                            onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--gray)'">
                                2
                            </button>
                            
                            <span style="
                                display: flex;
                                align-items: center;
                                color: var(--gray);
                                padding: 0 0.5rem;
                            ">
                                ...
                            </span>
                            
                            <button class="page-btn" onclick="goToPage(3)" style="
                                width: 40px;
                                height: 40px;
                                border: 2px solid #e2e8f0;
                                background: white;
                                color: var(--gray);
                                border-radius: var(--radius-md);
                                font-weight: 600;
                                cursor: pointer;
                                transition: all var(--transition-normal);
                            "
                            onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'"
                            onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--gray)'">
                                3
                            </button>
                        </div>
                        
                        <button onclick="nextPage()" style="
                            padding: 0.75rem 1.25rem;
                            border: 2px solid #e2e8f0;
                            background: white;
                            color: var(--gray);
                            border-radius: var(--radius-md);
                            font-family: 'Inter', sans-serif;
                            font-size: 0.95rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all var(--transition-normal);
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        "
                        onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--primary)'"
                        onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--gray)'">
                            Próxima
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </section>
            ` : ''}
            
            <!-- Categorias Populares -->
            <section class="animate-fade-up" style="margin-top: 4rem;">
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
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
                        <i class="fas fa-layer-group"></i>
                    </div>
                    Explore por Categoria
                </h2>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                ">
                    ${categories.map(category => {
                        const catCourses = allCourses.filter(c => c.category === category);
                        const iconMap = {
                            'Artes Marciais': 'fas fa-fist-raised',
                            'Fitness': 'fas fa-dumbbell',
                            'Música': 'fas fa-music',
                            'Dança': 'fas fa-heart',
                            'Idiomas': 'fas fa-globe-americas',
                            'Culinária': 'fas fa-carrot',
                            'Bem-estar': 'fas fa-spa',
                            'Artes': 'fas fa-paint-brush',
                            'Tecnologia': 'fas fa-laptop-code'
                        };
                        
                        return `
                            <div class="category-card-big" onclick="filterByCategory('${category}')" style="
                                background: white;
                                border-radius: var(--radius-lg);
                                padding: 1.5rem;
                                box-shadow: var(--shadow-md);
                                cursor: pointer;
                                transition: all var(--transition-normal);
                                border: 2px solid transparent;
                                text-align: center;
                            "
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-lg)'; this.style.borderColor='var(--primary)'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'; this.style.borderColor='transparent'">
                                <div style="
                                    font-size: 2.5rem;
                                    color: var(--primary);
                                    margin-bottom: 1rem;
                                ">
                                    <i class="${iconMap[category] || 'fas fa-book'}"></i>
                                </div>
                                
                                <h3 style="
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.2rem;
                                    font-weight: 700;
                                    color: var(--dark);
                                    margin-bottom: 0.5rem;
                                ">
                                    ${category}
                                </h3>
                                
                                <div style="
                                    font-size: 0.9rem;
                                    color: var(--gray);
                                    background: var(--light);
                                    padding: 0.25rem 0.75rem;
                                    border-radius: var(--radius-full);
                                    display: inline-block;
                                ">
                                    ${catCourses.length} cursos
                                </div>
                            </div>
                        `;
                    }).join('')}
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
                justify-content: space-around;
                max-width: 500px;
                margin: 0 auto;
            ">
                ${getCoursesBottomNavHTML()}
            </div>
        </nav>
    `;
    
    // Inicializar variáveis de estado
    setTimeout(() => {
        window.currentCourses = allCourses;
        window.filteredCourses = allCourses;
        window.currentView = 'grid';
        window.currentPage = 1;
        window.coursesPerPage = 6;
    }, 100);
}

// ===== FUNÇÕES AUXILIARES DO CATÁLOGO =====

// Criar card do curso (grid ou lista)
function createCourseCardHTML(course, view = 'grid') {
    if (view === 'grid') {
        return `
            <div class="course-card" data-course-id="${course.id}" style="
                background: white;
                border-radius: var(--radius-lg);
                overflow: hidden;
                box-shadow: var(--shadow-md);
                transition: all var(--transition-normal);
                cursor: pointer;
                position: relative;
            "
            onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='var(--shadow-xl)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)'"
            onclick="showCourseDetail(${course.id})">
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
                
                ${course.new ? `
                    <div style="
                        position: absolute;
                        top: 1rem;
                        left: 1rem;
                        background: var(--gradient-secondary);
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: var(--radius-full);
                        font-size: 0.8rem;
                        font-weight: 700;
                        z-index: 2;
                        box-shadow: var(--shadow-sm);
                    ">
                        <i class="fas fa-bolt"></i> NOVO
                    </div>
                ` : ''}
                
                <div style="
                    width: 100%;
                    height: 180px;
                    background: linear-gradient(135deg, ${getCategoryColor(course.category)} 0%, ${getCategoryColor(course.category)}99 100%);
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
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 0.75rem;
                    ">
                        <div>
                            <div style="
                                display: inline-block;
                                background: ${getCategoryColor(course.category)}15;
                                color: ${getCategoryColor(course.category)};
                                padding: 0.25rem 0.75rem;
                                border-radius: var(--radius-full);
                                font-size: 0.85rem;
                                font-weight: 600;
                                margin-bottom: 0.5rem;
                            ">
                                ${course.category}
                            </div>
                            
                            <h3 style="
                                font-family: 'Poppins', sans-serif;
                                font-size: 1.3rem;
                                font-weight: 700;
                                color: var(--dark);
                                margin-bottom: 0.5rem;
                                line-height: 1.3;
                            ">
                                ${course.title}
                            </h3>
                        </div>
                        
                        <div style="text-align: right;">
                            <div style="
                                font-size: 1.5rem;
                                font-weight: 800;
                                color: var(--dark);
                            ">
                                R$ ${course.price}
                            </div>
                            <div style="
                                font-size: 0.85rem;
                                color: var(--gray);
                            ">
                                /${course.priceType}
                            </div>
                        </div>
                    </div>
                    
                    <p style="
                        color: var(--gray);
                        line-height: 1.5;
                        margin-bottom: 1rem;
                        font-size: 0.95rem;
                        height: 45px;
                        overflow: hidden;
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
                            
                            <div style="display: flex; align-items: center; gap: 0.25rem; color: var(--gray); font-size: 0.9rem;">
                                <i class="fas fa-users"></i>
                                <span>${course.students}</span>
                            </div>
                        </div>
                        
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        ">
                            <span style="
                                background: ${course.vacancies > 5 ? 'var(--success-light)' : 'var(--warning-light)'};
                                color: ${course.vacancies > 5 ? 'var(--success)' : 'var(--warning)'};
                                padding: 0.25rem 0.5rem;
                                border-radius: var(--radius-full);
                                font-size: 0.8rem;
                                font-weight: 600;
                            ">
                                ${course.vacancies} vagas
                            </span>
                        </div>
                    </div>
                    
                    <div style="
                        display: flex;
                        gap: 0.75rem;
                        margin-top: 1rem;
                    ">
                        <button class="btn btn-primary" style="flex: 1; padding: 0.75rem;" onclick="event.stopPropagation(); showCourseDetail(${course.id})">
                            <i class="fas fa-eye"></i> Ver Detalhes
                        </button>
                        
                        <button class="btn btn-outline" style="padding: 0.75rem;" onclick="event.stopPropagation(); toggleCourseFavorite(${course.id})" title="Adicionar aos favoritos">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // View LIST
        return `
            <div class="course-card-list" data-course-id="${course.id}" style="
                background: white;
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-md);
                transition: all var(--transition-normal);
                cursor: pointer;
                position: relative;
                overflow: hidden;
            "
            onmouseover="this.style.transform='translateX(5px)'; this.style.boxShadow='var(--shadow-lg)'"
            onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='var(--shadow-md)'"
            onclick="showCourseDetail(${course.id})">
                <div style="
                    display: grid;
                    grid-template-columns: 120px 1fr auto;
                    gap: 1.5rem;
                    align-items: center;
                ">
                    <!-- Ícone -->
                    <div style="
                        width: 120px;
                        height: 120px;
                        background: linear-gradient(135deg, ${getCategoryColor(course.category)} 0%, ${getCategoryColor(course.category)}99 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 2.5rem;
                        border-radius: var(--radius-md);
                        margin: 1rem;
                    ">
                        <i class="${course.icon}"></i>
                    </div>
                    
                    <!-- Informações -->
                    <div style="padding: 1rem 0;">
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            margin-bottom: 0.5rem;
                        ">
                            <div style="
                                display: inline-block;
                                background: ${getCategoryColor(course.category)}15;
                                color: ${getCategoryColor(course.category)};
                                padding: 0.25rem 0.75rem;
                                border-radius: var(--radius-full);
                                font-size: 0.85rem;
                                font-weight: 600;
                            ">
                                ${course.category}
                            </div>
                            
                            ${course.featured ? `
                                <span style="
                                    background: var(--gradient-accent);
                                    color: white;
                                    padding: 0.25rem 0.75rem;
                                    border-radius: var(--radius-full);
                                    font-size: 0.8rem;
                                    font-weight: 700;
                                ">
                                    <i class="fas fa-star"></i> DESTAQUE
                                </span>
                            ` : ''}
                            
                            ${course.new ? `
                                <span style="
                                    background: var(--gradient-secondary);
                                    color: white;
                                    padding: 0.25rem 0.75rem;
                                    border-radius: var(--radius-full);
                                    font-size: 0.8rem;
                                    font-weight: 700;
                                ">
                                    <i class="fas fa-bolt"></i> NOVO
                                </span>
                            ` : ''}
                        </div>
                        
                        <h3 style="
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.4rem;
                            font-weight: 700;
                            color: var(--dark);
                            margin-bottom: 0.5rem;
                        ">
                            ${course.title}
                        </h3>
                        
                        <p style="
                            color: var(--gray);
                            line-height: 1.5;
                            margin-bottom: 1rem;
                            font-size: 0.95rem;
                        ">
                            ${course.description}
                        </p>
                        
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 1.5rem;
                            color: var(--gray);
                            font-size: 0.9rem;
                        ">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <i class="fas fa-star" style="color: #f59e0b;"></i>
                                <span style="font-weight: 600;">${course.rating}</span>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <i class="fas fa-users"></i>
                                <span>${course.students} alunos</span>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <i class="fas fa-clock"></i>
                                <span>${course.duration}</span>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <i class="fas fa-chalkboard-teacher"></i>
                                <span>${course.instructor}</span>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <i class="fas fa-video"></i>
                                <span>${course.modality}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Preço e Ações -->
                    <div style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 1rem;
                        padding: 1rem;
                        min-width: 200px;
                    ">
                        <div style="text-align: right;">
                            <div style="
                                font-size: 1.8rem;
                                font-weight: 800;
                                color: var(--dark);
                            ">
                                R$ ${course.price}
                            </div>
                            <div style="
                                font-size: 0.9rem;
                                color: var(--gray);
                            ">
                                /${course.priceType}
                            </div>
                        </div>
                        
                        <div style="
                            display: flex;
                            gap: 0.75rem;
                            width: 100%;
                        ">
                            <button class="btn btn-primary" style="flex: 1;" onclick="event.stopPropagation(); showCourseDetail(${course.id})">
                                <i class="fas fa-eye"></i> Detalhes
                            </button>
                            
                            <button class="btn btn-accent" style="flex: 1;" onclick="event.stopPropagation(); showInterestForm(${course.id})">
                                <i class="fas fa-hand-paper"></i> Interesse
                            </button>
                        </div>
                        
                        <div style="
                            display: flex;
                            gap: 0.5rem;
                            width: 100%;
                        ">
                            <button class="btn btn-outline" style="flex: 1;" onclick="event.stopPropagation(); toggleCourseFavorite(${course.id})">
                                <i class="fas fa-heart"></i> Favoritar
                            </button>
                            
                            <button class="btn btn-outline" style="flex: 1;" onclick="event.stopPropagation(); shareCourse(${course.id})">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Buscar cursos
function searchCourses() {
    const searchTerm = document.getElementById('courseSearch').value.toLowerCase();
    filterAndUpdateCourses(searchTerm);
}

// Filtrar cursos
function filterCourses() {
    const category = document.getElementById('filterCategory').value;
    const modality = document.getElementById('filterModality').value;
    const price = document.getElementById('filterPrice').value;
    const duration = document.getElementById('filterDuration').value;
    const level = document.getElementById('filterLevel').value;
    const searchTerm = document.getElementById('courseSearch')?.value.toLowerCase() || '';
    
    filterAndUpdateCourses(searchTerm, { category, modality, price, duration, level });
}

// Função principal de filtro
function filterAndUpdateCourses(searchTerm = '', filters = {}) {
    let filtered = window.currentCourses || [];
    
    // Filtro por busca
    if (searchTerm) {
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.instructor.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtro por categoria
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(course => course.category === filters.category);
    }
    
    // Filtro por modalidade
    if (filters.modality && filters.modality !== 'all') {
        filtered = filtered.filter(course => course.modality === filters.modality);
    }
    
    // Filtro por preço
    if (filters.price && filters.price !== 'all') {
        if (filters.price === '0') {
            filtered = filtered.filter(course => course.price === 0);
        } else if (filters.price === '300+') {
            filtered = filtered.filter(course => course.price > 300);
        } else {
            const maxPrice = parseInt(filters.price);
            filtered = filtered.filter(course => course.price <= maxPrice);
        }
    }
    
    // Filtro por duração
    if (filters.duration && filters.duration !== 'all') {
        filtered = filtered.filter(course => {
            const weeks = parseInt(course.duration);
            if (filters.duration === 'short') return weeks <= 8;
            if (filters.duration === 'medium') return weeks >= 9 && weeks <= 16;
            if (filters.duration === 'long') return weeks >= 17;
            return true;
        });
    }
    
    // Filtro por nível
    if (filters.level && filters.level !== 'all') {
        filtered = filtered.filter(course => course.level === filters.level);
    }
    
    window.filteredCourses = filtered;
    updateCourseDisplay();
}

// Atualizar display dos cursos
function updateCourseDisplay() {
    const gridContainer = document.getElementById('coursesGrid');
    const listContainer = document.getElementById('coursesList');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!gridContainer || !listContainer || !resultsCount) return;
    
    // Atualizar contador
    resultsCount.textContent = `${window.filteredCourses.length} cursos encontrados`;
    
    // Limpar containers
    gridContainer.innerHTML = '';
    listContainer.innerHTML = '';
    
    // Adicionar cursos filtrados
    window.filteredCourses.forEach(course => {
        gridContainer.innerHTML += createCourseCardHTML(course, 'grid');
        listContainer.innerHTML += createCourseCardHTML(course, 'list');
    });
    
    // Mostrar mensagem se não houver resultados
    if (window.filteredCourses.length === 0) {
        const noResults = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 4rem 2rem;
                background: white;
                border-radius: var(--radius-xl);
                box-shadow: var(--shadow-md);
            ">
                <div style="
                    font-size: 4rem;
                    color: var(--light);
                    margin-bottom: 1.5rem;
                ">
                    <i class="fas fa-search"></i>
                </div>
                
                <h2 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--dark);
                    margin-bottom: 1rem;
                ">
                    Nenhum curso encontrado
                </h2>
                
                <p style="
                    color: var(--gray);
                    max-width: 500px;
                    margin: 0 auto 2rem;
                    line-height: 1.6;
                    font-size: 1.1rem;
                ">
                    Tente ajustar seus filtros ou buscar por outros termos.
                </p>
                
                <button class="btn btn-primary" onclick="clearCourseFilters()">
                    <i class="fas fa-filter-circle-xmark"></i> Limpar Filtros
                </button>
            </div>
        `;
        
        gridContainer.innerHTML = noResults;
        listContainer.innerHTML = noResults;
    }
}

// Limpar filtros
function clearCourseFilters() {
    document.getElementById('filterCategory').value = 'all';
    document.getElementById('filterModality').value = 'all';
    document.getElementById('filterPrice').value = 'all';
    document.getElementById('filterDuration').value = 'all';
    document.getElementById('filterLevel').value = 'all';
    document.getElementById('courseSearch').value = '';
    
    window.filteredCourses = window.currentCourses;
    updateCourseDisplay();
    
    showNotification('Filtros limpos!', 'success');
}

// Filtrar por categoria (clicando na categoria)
function filterByCategory(category) {
    document.getElementById('filterCategory').value = category;
    filterCourses();
    showNotification(`Filtrando por: ${category}`, 'info');
}

// Mudar visualização (grid/list)
function changeView(view) {
    window.currentView = view;
    const gridContainer = document.getElementById('coursesGrid');
    const listContainer = document.getElementById('coursesList');
    const gridBtn = document.getElementById('viewGrid');
    const listBtn = document.getElementById('viewList');
    
    if (view === 'grid') {
        gridContainer.style.display = 'grid';
        listContainer.style.display = 'none';
        gridBtn.style.background = 'var(--primary)';
        gridBtn.style.color = 'white';
        gridBtn.style.borderColor = 'var(--primary)';
        listBtn.style.background = 'white';
        listBtn.style.color = 'var(--gray)';
        listBtn.style.borderColor = '#e2e8f0';
    } else {
        gridContainer.style.display = 'none';
        listContainer.style.display = 'flex';
        gridBtn.style.background = 'white';
        gridBtn.style.color = 'var(--gray)';
        gridBtn.style.borderColor = '#e2e8f0';
        listBtn.style.background = 'var(--primary)';
        listBtn.style.color = 'white';
        listBtn.style.borderColor = 'var(--primary)';
    }
}

// Ordenar cursos
function sortCourses() {
    const sortBy = document.getElementById('sortCourses').value;
    
    window.filteredCourses.sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'price_asc':
                return a.price - b.price;
            case 'price_desc':
                return b.price - a.price;
            case 'newest':
                // Simulação - cursos com flag "new" primeiro
                if (a.new && !b.new) return -1;
                if (!a.new && b.new) return 1;
                return 0;
            case 'students':
                return b.students - a.students;
            default:
                return 0;
        }
    });
    
    updateCourseDisplay();
    showNotification(`Cursos ordenados`, 'info');
}

// Toggle favorito do curso
function toggleCourseFavorite(courseId) {
    const course = window.currentCourses.find(c => c.id === courseId);
    if (course) {
        showNotification(`"${course.title}" adicionado aos favoritos!`, 'success');
        
        // Animar o botão de coração
        const heartBtn = event.target.closest('button');
        if (heartBtn) {
            heartBtn.innerHTML = '<i class="fas fa-heart" style="color: var(--accent);"></i>';
            setTimeout(() => {
                heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
            }, 1000);
        }
    }
}

// Navegação de página
function previousPage() {
    if (window.currentPage > 1) {
        window.currentPage--;
        updatePagination();
        showNotification(`Página ${window.currentPage}`, 'info');
    }
}

function nextPage() {
    const totalPages = Math.ceil(window.filteredCourses.length / window.coursesPerPage);
    if (window.currentPage < totalPages) {
        window.currentPage++;
        updatePagination();
        showNotification(`Página ${window.currentPage}`, 'info');
    }
}

function goToPage(page) {
    window.currentPage = page;
    updatePagination();
    showNotification(`Página ${page}`, 'info');
}

function updatePagination() {
    // Implementação simplificada para demonstração
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach((btn, index) => {
        if (index + 1 === window.currentPage) {
            btn.style.background = 'var(--primary)';
            btn.style.color = 'white';
            btn.style.borderColor = 'var(--primary)';
        } else {
            btn.style.background = 'white';
            btn.style.color = 'var(--gray)';
            btn.style.borderColor = '#e2e8f0';
        }
    });
}

// Bottom Navigation específica do catálogo
function getCoursesBottomNavHTML() {
    return `
        <a class="nav-item" onclick="showHomeScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-home" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Home</span>
        </a>
        
        <a class="nav-item active" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--primary);
            text-decoration: none;
            min-width: 70px;
            background: var(--light);
        ">
            <i class="fas fa-book" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Cursos</span>
        </a>
        
        <a class="nav-item" onclick="showFavoritesScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
            position: relative;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-heart" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Favoritos</span>
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
                5
            </span>
        </a>
        
        <a class="nav-item" onclick="showProfileScreen()" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--gray);
            text-decoration: none;
            min-width: 70px;
        "
        onmouseover="this.style.backgroundColor='var(--light)'; this.style.color='var(--primary)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--gray)'">
            <i class="fas fa-user" style="font-size: 1.3rem;"></i>
            <span style="font-size: 0.75rem; font-weight: 600;">Perfil</span>
        </a>
    `;
}
// ===== ADICIONAR FUNÇÕES GLOBAIS =====
// Adicionar estas linhas DEPOIS de toda a função showProfileScreen
// e ANTES do final do arquivo

// window.showProfileScreen = showProfileScreen;
// window.togglePasswordVisibility = togglePasswordVisibility;
// window.showMyInterests = showMyInterests;
// window.showMyFavorites = showMyFavorites;
// window.showSettings = showSettings;
// window.handleLogout = handleLogout;
// window.continueCourse = continueCourse;
// No final do arquivo, junto com as outras window.*
window.showFavoritesScreen = showFavoritesScreen;
window.filterFavorites = filterFavorites;
window.clearFavoritesFilters = clearFavoritesFilters;
window.removeFromFavorites = removeFromFavorites;
window.openCourse = openCourse;
window.showNotification = showNotification;
// Funções do Catálogo de Cursos
window.showCoursesScreen = showCoursesScreen;
window.searchCourses = searchCourses;
window.filterCourses = filterCourses;
window.clearCourseFilters = clearCourseFilters;
window.filterByCategory = filterByCategory;
window.changeView = changeView;
window.sortCourses = sortCourses;
window.toggleCourseFavorite = toggleCourseFavorite;
window.previousPage = previousPage;
window.nextPage = nextPage;
window.goToPage = goToPage;
