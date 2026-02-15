<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KASUN-ICT | Master ICT with Us</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            500: '#3b82f6',
                            600: '#2563eb',
                            900: '#1e3a8a',
                        }
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        .glass-effect {
            background: rgba(17, 24, 39, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>

<body class="bg-gray-900 text-white selection:bg-brand-500 selection:text-white">

    <nav class="fixed w-full z-50 glass-effect">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="index.html" class="flex items-center gap-2">
                        <i class="fas fa-laptop-code text-brand-500 text-2xl"></i>
                        <span class="text-2xl font-bold tracking-tight">KASUN-<span class="text-brand-500">ICT</span></span>
                    </a>
                </div>

                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="index.html" class="text-white hover:text-brand-500 px-3 py-2 rounded-md font-medium transition active">Home</a>
                        <a href="classes.html" class="text-gray-300 hover:text-brand-500 px-3 py-2 rounded-md font-medium transition">Live Classes</a>
                        <a href="recordings.html" class="text-gray-300 hover:text-brand-500 px-3 py-2 rounded-md font-medium transition">Recordings</a>
                        <a href="#about" class="text-gray-300 hover:text-brand-500 px-3 py-2 rounded-md font-medium transition">About</a>
                        
                        <button onclick="toggleLoginModal()" id="nav-login-btn" class="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition ml-2">
                            <i class="fas fa-user-circle mr-2"></i>Login
                        </button>
                        
                        <a href="#contact" class="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-full font-medium transition shadow-lg shadow-brand-500/30">Join Now</a>
                    </div>
                </div>

                <div class="-mr-2 flex md:hidden">
                    <button id="menu-btn" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="md:hidden hidden bg-gray-900 border-t border-gray-800" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="index.html" class="text-brand-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="classes.html" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Live Classes</a>
                
                <button onclick="toggleLoginModal()" class="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <i class="fas fa-sign-in-alt mr-2"></i>Login
                </button>

                <a href="#contact" class="bg-brand-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4">Join Now</a>
            </div>
        </div>
    </nav>

    <div id="login-modal" class="fixed inset-0 z-[100] hidden overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity" aria-hidden="true" onclick="toggleLoginModal()"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div class="relative inline-block align-bottom bg-gray-800 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-gray-700">
                <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                            <h3 class="text-2xl leading-6 font-bold text-white mb-2" id="modal-title">Student Login</h3>
                            <p class="text-sm text-gray-400 mb-6">Enter your username and password to access premium content.</p>
                            
                            <form id="login-form" onsubmit="handleLogin(event)" class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-400 mb-1">Username</label>
                                    <input type="text" id="username" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500" placeholder="Enter username">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-400 mb-1">Password</label>
                                    <input type="password" id="password" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500" placeholder="••••••••">
                                </div>
                                <p id="login-error" class="text-red-500 text-sm hidden"><i class="fas fa-exclamation-circle mr-1"></i> Invalid username or password</p>
                                <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 rounded-lg transition">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="student-dashboard" class="hidden pt-32 pb-10 bg-gray-900 min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                <div>
                    <h1 class="text-3xl font-bold text-white">Welcome, <span id="user-display-name" class="text-brand-500">Student</span>!</h1>
                    <p class="text-gray-400">Access your exclusive content below.</p>
                </div>
                <button onclick="handleLogout()" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold">Logout</button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div class="text-brand-500 text-4xl mb-4"><i class="fas fa-file-pdf"></i></div>
                    <h3 class="text-xl font-bold text-white mb-2">2026 Revision Tute Pack</h3>
                    <p class="text-gray-400 mb-4">Download the complete PDF set for this month.</p>
                    <a href="#" class="text-brand-500 hover:text-white font-bold">Download Now &rarr;</a>
                </div>
                 <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div class="text-purple-500 text-4xl mb-4"><i class="fas fa-video"></i></div>
                    <h3 class="text-xl font-bold text-white mb-2">Exclusive Video Lesson</h3>
                    <p class="text-gray-400 mb-4">Watch the special recording on Networking.</p>
                    <a href="#" class="text-brand-500 hover:text-white font-bold">Watch Now &rarr;</a>
                </div>
            </div>
        </div>
    </section>

    <div id="public-content">
        
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Master ICT with <br class="hidden md:block" />
                    <span class="gradient-text">Excellence</span>
                </h1>
                <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                    Join Sri Lanka's premium online ICT class. Live sessions, high-quality recordings, and comprehensive learning materials.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="classes.html" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/30 transition transform hover:scale-105">
                        <i class="fas fa-play-circle mr-2"></i> Join Live Class
                    </a>
                </div>
            </div>
        </section>

        <section id="contact" class="py-20 bg-gray-800/30">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-white sm:text-4xl">Get in <span class="text-brand-500">Touch</span></h2>
                </div>

                <div class="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8 md:p-12">
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLSfZgoNBXe7Ja1_vprp349LNXDlVfvG8U-T67tf8g18yz5jzGQ/formResponse" method="POST" class="space-y-6" target="_blank">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input type="text" id="name" name="entry.XXXXXX" required class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                <input type="tel" id="phone" name="entry.XXXXXX" required class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500">
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition">Send Message</button>
                    </form>
                </div>
            </div>
        </section>

    </div> <footer class="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">© 2026 KASUN-ICT. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // 1. MOBILE MENU TOGGLE
        const btn = document.getElementById("menu-btn");
        const nav = document.getElementById("mobile-menu");
        btn.addEventListener("click", () => {
            nav.classList.toggle("hidden");
        });

        // 2. USER DATABASE (මෙන්න මෙතන තමයි ළමයිව add/remove කරන්නේ)
        // අලුත් ළමයෙක් දාන්න ඕන නම් පහළ list එකට අලුත් පේලියක් එකතු කරන්න.
        const students = [
            { username: "kasun", password: "adminpassword", name: "Kasun Prabhath" },
            { username: "student1", password: "123", name: "Amal Perera" },
            { username: "student2", password: "456", name: "Nimal Silva" }
        ];

        // 3. LOGIN MODAL FUNCTIONS
        function toggleLoginModal() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
        }

        // 4. HANDLE LOGIN
        function handleLogin(e) {
            e.preventDefault(); // Form එක refresh වෙන එක නවත්තනවා
            
            const userIn = document.getElementById('username').value;
            const passIn = document.getElementById('password').value;
            const errorMsg = document.getElementById('login-error');

            // Check if user exists in our 'students' list
            const foundUser = students.find(s => s.username === userIn && s.password === passIn);

            if (foundUser) {
                // Success!
                errorMsg.classList.add('hidden');
                toggleLoginModal(); // Close modal
                
                // Show Dashboard, Hide Public Content
                document.getElementById('public-content').classList.add('hidden');
                document.getElementById('student-dashboard').classList.remove('hidden');
                
                // Update Name
                document.getElementById('user-display-name').innerText = foundUser.name;
                
                // Button Text change to Logout
                document.getElementById('nav-login-btn').innerText = "Logout";
                document.getElementById('nav-login-btn').setAttribute("onclick", "handleLogout()");

                alert("Login Successful! Welcome " + foundUser.name);
            } else {
                // Fail
                errorMsg.classList.remove('hidden');
            }
        }

        // 5. HANDLE LOGOUT
        function handleLogout() {
            // Hide Dashboard, Show Public Content
            document.getElementById('student-dashboard').classList.add('hidden');
            document.getElementById('public-content').classList.remove('hidden');
            
            // Reset Button
            document.getElementById('nav-login-btn').innerHTML = '<i class="fas fa-user-circle mr-2"></i>Login';
            document.getElementById('nav-login-btn').setAttribute("onclick", "toggleLoginModal()");
            
            // Clear inputs
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            
            alert("Logged out successfully!");
        }
    </script>
</body>
</html>
