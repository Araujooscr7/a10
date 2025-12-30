// ===== COMUNIDADE ATIVA - APP PRINCIPAL =====
// Sistema de Navegação SPA (Single Page Application)

// Dados mockados iniciais
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
            
            // Redireciona para home
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

// 5. TELA DE REGISTRO
function showRegisterScreen() {
    alert('Tela de cadastro será implementada na próxima etapa! Por enquanto, use o login de demonstração.');
    showLoginScreen();
}

// 6. TELA ESQUECI SENHA
function showForgotPassword() {
    alert('Sistema de recuperação de senha simulado. Um email seria enviado na versão real.');
}

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
                showCourseDetail(1); // ID 1 para demonstração
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
                    " onclick="event.stopPropagation(); showCourseDetail(1)">
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
    
    return courses.map(course => `
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
                    " onclick="event.stopPropagation(); showCourseDetail(2)">
                        <i class="fas fa-info-circle"></i> Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
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

// 8. TELA DE DETALHES DO CURSO
function showCourseDetail(courseId = 1) {
    const course = {
        id: courseId,
        title: "Judo Infantil (6-12 anos)",
        category: "Artes Marciais",
        description: "Desenvolvimento físico e mental através das técnicas do Judô. Aprenda disciplina, respeito e autodefesa.",
        
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
        
        rating: 4.8,
        totalAvaliacoes: 45
    };
    
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- Simple Course Detail -->
        <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
            <button onclick="showHomeScreen()" style="
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary);
                cursor: pointer;
                margin-bottom: 2rem;
            ">
                <i class="fas fa-arrow-left"></i> Voltar
            </button>
            
            <h1 style="color: var(--primary); margin-bottom: 1rem;">${course.title}</h1>
            <p style="color: var(--gray); margin-bottom: 2rem;">${course.description}</p>
            
            <div style="background: white; border-radius: var(--radius-lg); padding: 2rem; box-shadow: var(--shadow-md);">
                <h2 style="color: var(--dark); margin-bottom: 1.5rem;">Informações do Curso</h2>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    ${Object.entries(course.details).map(([key, value]) => `
                        <div style="background: var(--light); padding: 1rem; border-radius: var(--radius-md);">
                            <div style="font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">
                                ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </div>
                            <div style="color: var(--dark);">${Array.isArray(value) ? value.join(', ') : value}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary" onclick="alert('Interesse registrado!')">
                        <i class="fas fa-hand-paper"></i> Tenho Interesse
                    </button>
                    <button class="btn btn-secondary" onclick="alert('Adicionado aos favoritos!')">
                        <i class="fas fa-heart"></i> Favoritar
                    </button>
                    <button class="btn btn-outline" onclick="showHomeScreen()">
                        <i class="fas fa-arrow-left"></i> Voltar para Home
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Funções auxiliares
function showCategoryCourses(category) {
    alert(`Mostrando cursos da categoria: ${category}\n\nEsta funcionalidade será implementada com:\n• Filtragem por categoria\n• Lista completa de cursos\n• Paginação`);
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

// Funções globais para o HTML acessar
window.showSplashScreen = showSplashScreen;
window.showWelcomeScreen = showWelcomeScreen;
window.showLoginScreen = showLoginScreen;
window.showRegisterScreen = showRegisterScreen;
window.showForgotPassword = showForgotPassword;
window.showHomeScreen = showHomeScreen;
window.showCoursesScreen = showCoursesScreen;
window.showFavoritesScreen = showFavoritesScreen;
window.showProfileScreen = showProfileScreen;
window.showCourseDetail = showCourseDetail;
window.showCategoryCourses = showCategoryCourses;
window.handleLogin = handleLogin;