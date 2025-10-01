// Securaa Documentation JavaScript

class SecuraaDocumentation {
    constructor() {
        this.currentSection = 'overview';
        this.searchIndex = [];
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSearch();
        this.setupScrollSpy();
        this.loadContent();
        this.setupResponsiveMenu();
    }

    setupNavigation() {
        // Handle sidebar navigation
        document.querySelectorAll('.sidebar-nav a, .main-nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const sectionId = href.substring(1);
                    this.navigateToSection(sectionId);
                }
            });
        });

        // Handle feature card links
        document.querySelectorAll('.feature-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const sectionId = href.substring(1);
                    this.navigateToSection(sectionId);
                }
            });
        });
    }

    navigateToSection(sectionId) {
        this.currentSection = sectionId;
        this.updateActiveNavigation();
        this.loadSectionContent(sectionId);
        this.scrollToSection(sectionId);
        this.updateURL(sectionId);
    }

    updateActiveNavigation() {
        // Remove active class from all nav links
        document.querySelectorAll('.sidebar-nav a, .main-nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current section link
        const activeLink = document.querySelector(`a[href="#${this.currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId !== 'overview') {
            // If section doesn't exist, scroll to dynamic content area
            const dynamicContent = document.getElementById('dynamic-content');
            if (dynamicContent) {
                dynamicContent.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    updateURL(sectionId) {
        const newURL = `${window.location.pathname}#${sectionId}`;
        history.pushState({ section: sectionId }, '', newURL);
    }

    loadContent() {
        // Load initial content based on URL hash
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.navigateToSection(hash);
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const section = e.state?.section || 'overview';
            this.navigateToSection(section);
        });
    }

    loadSectionContent(sectionId) {
        const dynamicContent = document.getElementById('dynamic-content');
        if (!dynamicContent) return;

        // Show loading state
        dynamicContent.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                Loading ${sectionId} content...
            </div>
        `;

        // Load content based on section
        setTimeout(() => {
            const content = this.getSectionContent(sectionId);
            dynamicContent.innerHTML = content;
            
            // Scroll to the dynamic content area
            dynamicContent.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }

    getSectionContent(sectionId) {
        const contentMap = {
            'sia': this.getSIAContent(),
            'soar': this.getSOARContent(),
            'tip': this.getTIPContent(),
            'csam': this.getCSAMContent(),
            'prerequisites': this.getPrerequisitesContent(),
            'architecture': this.getArchitectureContent(),
            'installation-guide': this.getInstallationContent(),
            'deployment': this.getDeploymentContent(),
            'hardware-specs': this.getHardwareSpecsContent(),
            'csam-admin': this.getCSAMAdminContent(),
            'tip-admin': this.getTIPAdminContent(),
            'user-management': this.getUserManagementContent(),
            'integrations': this.getIntegrationsContent(),
            'playbooks': this.getPlaybooksContent(),
            'api-reference': this.getAPIReferenceContent(),
            'troubleshooting': this.getTroubleshootingContent(),
            'faq': this.getFAQContent(),
            'contact': this.getContactContent()
        };

        return contentMap[sectionId] || this.getDefaultContent(sectionId);
    }

    getSIAContent() {
        return `
            <section id="sia" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-chart-line"></i> SIA - Security Intelligence Analytics</h2>
                    <p>Advanced analytics platform for comprehensive threat detection and security intelligence gathering.</p>
                </div>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3>Real-time Monitoring</h3>
                        <p>Continuous monitoring of network traffic, user behavior, and system activities with real-time threat detection capabilities.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3>AI-Powered Analytics</h3>
                        <p>Machine learning algorithms for anomaly detection, pattern recognition, and predictive threat analysis.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-chart-bar"></i>
                        </div>
                        <h3>Advanced Reporting</h3>
                        <p>Comprehensive dashboards and customizable reports for security metrics and compliance requirements.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>Threat Intelligence</h3>
                        <p>Integration with global threat intelligence feeds and custom threat indicators for enhanced detection.</p>
                    </div>
                </div>

                <div class="alert alert-info">
                    <strong>Key Benefits:</strong> SIA provides organizations with advanced threat detection capabilities, reducing false positives by up to 80% while improving incident response times by 60%.
                </div>

                <h3>System Requirements</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Minimum</th>
                            <th>Recommended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CPU</td>
                            <td>8 cores</td>
                            <td>16+ cores</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>32 GB</td>
                            <td>64+ GB</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>1 TB SSD</td>
                            <td>2+ TB NVMe SSD</td>
                        </tr>
                        <tr>
                            <td>Network</td>
                            <td>1 Gbps</td>
                            <td>10+ Gbps</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;
    }

    getSOARContent() {
        return `
            <section id="soar" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-robot"></i> SOAR - Security Orchestration, Automation & Response</h2>
                    <p>Streamline security operations with automated incident response and orchestration capabilities.</p>
                </div>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3>Automated Workflows</h3>
                        <p>Pre-built and customizable playbooks for automated incident response and threat remediation.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-link"></i>
                        </div>
                        <h3>Tool Integration</h3>
                        <p>Seamless integration with 200+ security tools including SIEM, firewalls, and threat intelligence platforms.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>Rapid Response</h3>
                        <p>Reduce incident response times from hours to minutes with automated investigation and containment.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>Collaborative Platform</h3>
                        <p>Centralized platform for security teams to collaborate on incidents and share threat intelligence.</p>
                    </div>
                </div>

                <h3>Playbook Categories</h3>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Incident Response</h3>
                            <p>Automated workflows for incident classification, investigation, and containment procedures.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Threat Hunting</h3>
                            <p>Proactive threat hunting playbooks with automated IOC searches and threat correlation.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Vulnerability Management</h3>
                            <p>Automated vulnerability assessment, prioritization, and remediation workflows.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h3>Compliance Automation</h3>
                            <p>Automated compliance checks and reporting for various regulatory frameworks.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getTIPContent() {
        return `
            <section id="tip" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-brain"></i> TIP - Threat Intelligence Platform</h2>
                    <p>Comprehensive threat intelligence platform for collecting, analyzing, and sharing threat information.</p>
                </div>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h3>Global Threat Feeds</h3>
                        <p>Integration with premium and open-source threat intelligence feeds from around the world.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3>IOC Analysis</h3>
                        <p>Advanced analysis of indicators of compromise with context and attribution information.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <h3>Intelligence Sharing</h3>
                        <p>Secure sharing of threat intelligence with trusted partners and industry groups.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-filter"></i>
                        </div>
                        <h3>Custom Filtering</h3>
                        <p>Advanced filtering and correlation capabilities to focus on relevant threats for your organization.</p>
                    </div>
                </div>

                <div class="alert alert-success">
                    <strong>Integration Ready:</strong> TIP seamlessly integrates with SIEM platforms, firewalls, and other security tools to automatically apply threat intelligence.
                </div>

                <h3>Supported IOC Types</h3>
                <table>
                    <thead>
                        <tr>
                            <th>IOC Type</th>
                            <th>Description</th>
                            <th>Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IP Addresses</td>
                            <td>Malicious IP addresses and ranges</td>
                            <td>Command & Control servers, botnets</td>
                        </tr>
                        <tr>
                            <td>Domain Names</td>
                            <td>Malicious domains and subdomains</td>
                            <td>Phishing sites, malware distribution</td>
                        </tr>
                        <tr>
                            <td>File Hashes</td>
                            <td>MD5, SHA1, SHA256 hashes</td>
                            <td>Malware samples, suspicious files</td>
                        </tr>
                        <tr>
                            <td>URLs</td>
                            <td>Malicious URLs and paths</td>
                            <td>Exploit kits, phishing pages</td>
                        </tr>
                        <tr>
                            <td>Email Addresses</td>
                            <td>Malicious email addresses</td>
                            <td>Spam sources, phishing campaigns</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;
    }

    getCSAMContent() {
        return `
            <section id="csam" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-server"></i> CSAM - Cyber Security Asset Management</h2>
                    <p>Complete asset management solution for tracking, monitoring, and securing all your digital and physical assets.</p>
                </div>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-inventory"></i>
                        </div>
                        <h3>Asset Discovery</h3>
                        <p>Automated discovery and inventory of all network-connected devices and software assets.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-shield-virus"></i>
                        </div>
                        <h3>Vulnerability Assessment</h3>
                        <p>Continuous vulnerability scanning and assessment of all managed assets.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <h3>Compliance Monitoring</h3>
                        <p>Monitor asset compliance with security policies and regulatory requirements.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-chart-pie"></i>
                        </div>
                        <h3>Risk Assessment</h3>
                        <p>Comprehensive risk scoring and prioritization based on asset criticality and vulnerabilities.</p>
                    </div>
                </div>

                <h3>Asset Categories</h3>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Hardware Assets</h3>
                            <p>Servers, workstations, mobile devices, network equipment, and IoT devices.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Software Assets</h3>
                            <p>Operating systems, applications, licenses, and software configurations.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Cloud Assets</h3>
                            <p>Cloud instances, containers, virtual machines, and cloud services.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h3>Data Assets</h3>
                            <p>Databases, file shares, sensitive data repositories, and data flows.</p>
                        </div>
                    </div>
                </div>

                <div class="alert alert-warning">
                    <strong>Important:</strong> Regular asset discovery scans should be scheduled to maintain an accurate and up-to-date asset inventory.
                </div>
            </section>
        `;
    }

    getPrerequisitesContent() {
        return `
            <section id="prerequisites" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-list-check"></i> Prerequisites & Requirements</h2>
                    <p>Comprehensive requirements for deploying Securaa solutions in your environment.</p>
                </div>

                <h3>General System Requirements</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>SIA</th>
                            <th>SOAR</th>
                            <th>TIP</th>
                            <th>CSAM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>CPU</strong></td>
                            <td>16+ cores</td>
                            <td>8+ cores</td>
                            <td>8+ cores</td>
                            <td>12+ cores</td>
                        </tr>
                        <tr>
                            <td><strong>RAM</strong></td>
                            <td>64+ GB</td>
                            <td>32+ GB</td>
                            <td>32+ GB</td>
                            <td>48+ GB</td>
                        </tr>
                        <tr>
                            <td><strong>Storage</strong></td>
                            <td>2+ TB SSD</td>
                            <td>1+ TB SSD</td>
                            <td>1+ TB SSD</td>
                            <td>1.5+ TB SSD</td>
                        </tr>
                        <tr>
                            <td><strong>Network</strong></td>
                            <td>10+ Gbps</td>
                            <td>1+ Gbps</td>
                            <td>1+ Gbps</td>
                            <td>1+ Gbps</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Software Prerequisites</h3>
                <div class="feature-grid">
                    <div class="feature-card">
                        <h3>Operating System</h3>
                        <ul style="text-align: left; list-style: disc; padding-left: 1rem;">
                            <li>Ubuntu 20.04 LTS or later</li>
                            <li>CentOS 8 or RHEL 8+</li>
                            <li>Windows Server 2019+</li>
                        </ul>
                    </div>
                    
                    <div class="feature-card">
                        <h3>Database</h3>
                        <ul style="text-align: left; list-style: disc; padding-left: 1rem;">
                            <li>PostgreSQL 13+</li>
                            <li>MySQL 8.0+</li>
                            <li>MongoDB 5.0+</li>
                        </ul>
                    </div>
                    
                    <div class="feature-card">
                        <h3>Web Server</h3>
                        <ul style="text-align: left; list-style: disc; padding-left: 1rem;">
                            <li>Apache 2.4+</li>
                            <li>Nginx 1.18+</li>
                            <li>Built-in server available</li>
                        </ul>
                    </div>
                    
                    <div class="feature-card">
                        <h3>Runtime</h3>
                        <ul style="text-align: left; list-style: disc; padding-left: 1rem;">
                            <li>Python 3.8+</li>
                            <li>Node.js 16+</li>
                            <li>Java 11+</li>
                        </ul>
                    </div>
                </div>

                <h3>Network Requirements</h3>
                <div class="alert alert-info">
                    <strong>Firewall Configuration:</strong> Ensure the following ports are open for proper operation.
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Port</th>
                            <th>Protocol</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Interface</td>
                            <td>443</td>
                            <td>HTTPS</td>
                            <td>User access to web console</td>
                        </tr>
                        <tr>
                            <td>API</td>
                            <td>8080</td>
                            <td>HTTPS</td>
                            <td>REST API access</td>
                        </tr>
                        <tr>
                            <td>Database</td>
                            <td>5432</td>
                            <td>TCP</td>
                            <td>PostgreSQL connection</td>
                        </tr>
                        <tr>
                            <td>Syslog</td>
                            <td>514</td>
                            <td>UDP</td>
                            <td>Log collection</td>
                        </tr>
                        <tr>
                            <td>SNMP</td>
                            <td>161</td>
                            <td>UDP</td>
                            <td>Network monitoring</td>
                        </tr>
                    </tbody>
                </table>

                <h3>POC Prerequisites</h3>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Environment Preparation</h3>
                            <p>Prepare a dedicated environment with required resources and network connectivity.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Data Sources</h3>
                            <p>Identify and prepare data sources for integration during the POC period.</p>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Team Readiness</h3>
                            <p>Ensure security team members are available for training and evaluation activities.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getInstallationContent() {
        return `
            <section id="installation-guide" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-download"></i> Installation & Deployment Guide</h2>
                    <p>Step-by-step guide for installing and deploying Securaa solutions.</p>
                </div>

                <div class="alert alert-warning">
                    <strong>Before You Begin:</strong> Ensure all prerequisites are met and system requirements are satisfied before starting the installation process.
                </div>

                <h3>Installation Methods</h3>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <h3>On-Premises Installation</h3>
                        <p>Deploy Securaa solutions directly on your hardware infrastructure for maximum control and security.</p>
                        <a href="#on-premises" class="feature-link">View Guide <i class="fas fa-arrow-right"></i></a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud Deployment</h3>
                        <p>Deploy on AWS, Azure, or Google Cloud Platform with automated scaling and management.</p>
                        <a href="#cloud" class="feature-link">View Guide <i class="fas fa-arrow-right"></i></a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-boxes"></i>
                        </div>
                        <h3>Container Deployment</h3>
                        <p>Use Docker containers and Kubernetes for scalable and portable deployments.</p>
                        <a href="#containers" class="feature-link">View Guide <i class="fas fa-arrow-right"></i></a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <h3>Virtual Machine</h3>
                        <p>Deploy using pre-configured virtual machine images for quick setup and testing.</p>
                        <a href="#vm" class="feature-link">View Guide <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <h3>Quick Installation Steps</h3>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Download Installation Package</h3>
                            <p>Download the latest Securaa installation package from the customer portal.</p>
                            <pre><code>wget https://download.securaa.com/latest/securaa-installer.tar.gz</code></pre>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Extract and Prepare</h3>
                            <p>Extract the installation package and run the system preparation script.</p>
                            <pre><code>tar -xzf securaa-installer.tar.gz
cd securaa-installer
sudo ./prepare-system.sh</code></pre>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Configure Installation</h3>
                            <p>Edit the configuration file with your environment-specific settings.</p>
                            <pre><code>cp config/default.conf config/custom.conf
nano config/custom.conf</code></pre>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h3>Run Installation</h3>
                            <p>Execute the installation script and follow the interactive prompts.</p>
                            <pre><code>sudo ./install-securaa.sh --config config/custom.conf</code></pre>
                        </div>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h3>Verify Installation</h3>
                            <p>Check the installation status and access the web interface.</p>
                            <pre><code>sudo systemctl status securaa
curl -k https://localhost:443/health</code></pre>
                        </div>
                    </div>
                </div>

                <h3>Post-Installation Configuration</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SSL Certificate</td>
                            <td>Install valid SSL certificate for secure access</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Admin Account</td>
                            <td>Create initial administrator account</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Database Backup</td>
                            <td>Configure automated database backups</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Integration Setup</td>
                            <td>Configure integrations with existing security tools</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>Monitoring</td>
                            <td>Set up system monitoring and alerting</td>
                            <td>Medium</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }
    }

    performSearch(query) {
        if (query.length < 3) return;
        
        // Simple search implementation
        const searchableContent = document.querySelectorAll('h1, h2, h3, p, li');
        const results = [];
        
        searchableContent.forEach(element => {
            if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    element: element,
                    text: element.textContent,
                    type: element.tagName.toLowerCase()
                });
            }
        });
        
        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        // You can implement a search results popup or highlighting here
        console.log(`Search results for "${query}":`, results);
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
        
        const observerOptions = {
            rootMargin: '-20% 0px -35% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);
        
        sections.forEach(section => observer.observe(section));
    }

    setupResponsiveMenu() {
        // Add mobile menu functionality if needed
        const header = document.querySelector('.header');
        const sidebar = document.querySelector('.sidebar');
        
        // Mobile menu toggle (you can add a hamburger button)
        if (window.innerWidth <= 1024) {
            sidebar.style.display = 'none';
        }
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1024) {
                sidebar.style.display = 'none';
            } else {
                sidebar.style.display = 'block';
            }
        });
    }

    getDefaultContent(sectionId) {
        return `
            <section id="${sectionId}" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-info-circle"></i> ${sectionId.replace('-', ' ').toUpperCase()}</h2>
                    <p>Content for this section is being developed. Please check back later for updates.</p>
                </div>
                
                <div class="alert alert-info">
                    <strong>Coming Soon:</strong> Detailed documentation for this section will be available in the next release.
                </div>
            </section>
        `;
    }

    // Additional content methods for other sections...
    getArchitectureContent() {
        return `
            <section id="architecture" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-sitemap"></i> Solution Architecture</h2>
                    <p>Comprehensive overview of Securaa's solution architecture and system components.</p>
                </div>
                
                <div class="alert alert-info">
                    <strong>Architecture Overview:</strong> Securaa follows a modular, microservices-based architecture designed for scalability and reliability.
                </div>
                
                <!-- Architecture content here -->
            </section>
        `;
    }

    getIntegrationsContent() {
        return `
            <section id="integrations" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-puzzle-piece"></i> Available Integrations</h2>
                    <p>Securaa integrates with 200+ security tools and platforms for comprehensive security operations.</p>
                </div>
                
                <!-- Integrations content here -->
            </section>
        `;
    }

    getContactContent() {
        return `
            <section id="contact" class="content-section">
                <div class="section-header">
                    <h2><i class="fas fa-phone"></i> Contact Support</h2>
                    <p>Get help from our expert support team for any questions or issues.</p>
                </div>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3>Email Support</h3>
                        <p>support@securaa.com</p>
                        <p>Response time: 4-8 hours</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3>Phone Support</h3>
                        <p>+1 (555) 123-4567</p>
                        <p>Available 24/7</p>
                    </div>
                </div>
            </section>
        `;
    }

    // Add more content methods as needed...
}

// Initialize the documentation system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SecuraaDocumentation();
});

// Add smooth scrolling for all anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
});