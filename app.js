// 1. Job Data Array
let jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all" },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,00", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all" },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.", status: "all" }
];

let activeTab = 'all';

// 2. Render Function
function render() {
    const container = document.getElementById('jobs-container');
    
    // Filter jobs
    const filteredJobs = jobs.filter(job => activeTab === 'all' ? true : job.status === activeTab);
    
    // Update Dashboard Counts 
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('stat-count').innerText = filteredJobs.length;

    // Empty State Check 
    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-base-100 rounded-xl border-2 border-dashed border-base-300">
                <div class="bg-primary/10 p-3 rounded-full mb-4">
                    <i class="fa-solid fa-file-lines text-5xl text-primary"></i>
                </div>
                <h2 class="text-2xl font-bold text-base-content">No jobs available</h2>
                <p class="opacity-60">Try switching tabs or adding new jobs</p>
            </div>`;
        return;
    }

    // Render Cards
    container.innerHTML = filteredJobs.map(job => {
        
        // --- DYNAMIC STATUS LOGIC ---
        let statusText = "Not Applied";
        let statusColor = "opacity-50"; 

        if (job.status === 'interview') {
            statusText = "Interview";
            statusColor = "text-success";
        } else if (job.status === 'rejected') {
            statusText = "Rejected";
            statusColor = "text-error";
        }

        return `
        <div class="bg-base-100 p-6 rounded-xl border border-base-300 relative shadow-sm hover:shadow-md transition-all">
            <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 opacity-30 hover:opacity-100 hover:text-error transition-opacity">
                <i class="fa-solid fa-trash-can"></i>
            </button>

            <h3 class="text-lg font-bold text-base-content">${job.company}</h3>
            <p class="text-blue-500 font-semibold mb-2">${job.position}</p>
            
            <div class="flex flex-wrap gap-2 text-sm opacity-60 mb-3">
                <span>${job.location}</span> • <span>${job.type}</span> • <span>${job.salary}</span>
            </div>

            <div class="${statusColor} font-bold text-[10px] mb-4 uppercase tracking-widest">
                ${statusText}
            </div>

            <p class="opacity-70 text-sm mb-6 leading-relaxed">${job.desc}</p>
            
            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'interview')" 
                    class="btn btn-sm px-6 ${job.status === 'interview' ? 'btn-success text-white' : 'btn-outline btn-success'}">
                    INTERVIEW
                </button>

                <button onclick="updateStatus(${job.id}, 'rejected')" 
                    class="btn btn-sm px-6 ${job.status === 'rejected' ? 'btn-error text-white' : 'btn-outline btn-error'}">
                    REJECTED
                </button>
            </div>
        </div>
    `}).join('');
}

// 3. Logic & Helper Functions

function changeTab(tab) {
    activeTab = tab;
    // Update Button Classes for Active State
    ['all', 'interview', 'rejected'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (btn) {
            btn.className = (t === tab) 
                ? 'btn btn-sm btn-primary' 
                : 'btn btn-sm btn-ghost border-base-300 bg-base-100';
        }
    });
    render();
}

function updateStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        // Toggle: If clicked again, reset to 'all'
        job.status = (job.status === newStatus) ? 'all' : newStatus;
        render();
    }
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    render();
}

// Initial Run
render();