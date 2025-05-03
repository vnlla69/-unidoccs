
// Sidebar toggle functionality
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("collapsed");
});

// Modal handling
const modals = document.querySelectorAll('.modal');
const openModalButtons = {
    'uploadDocBtn': 'uploadDocModal',
    'changePhotoBtn': 'changePhotoModal'
};

// Open modals
Object.keys(openModalButtons).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            const modalId = openModalButtons[buttonId];
            document.getElementById(modalId).style.display = 'flex';
        });
    }
});

// Close modals when clicking X or cancel buttons
document.querySelectorAll('.close-modal, .cancel-btn').forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

// Close modal when clicking outside modal content
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Document edit buttons
document.querySelectorAll('.edit-doc-btn').forEach(button => {
    button.addEventListener('click', () => {
        const docId = button.getAttribute('data-doc-id');
        document.getElementById('editDocId').value = docId;
        // Here you would normally fetch the document data and populate the form
        // For demo purposes, we'll just set some placeholder values
        document.getElementById('editDocTitle').value = `Document ${docId}`;
        document.getElementById('editDocDescription').value = 'This is a sample document description';
        document.getElementById('editDocType').value = 'PDF';
        
        document.getElementById('editDocModal').style.display = 'flex';
    });
});

// Document delete buttons
document.querySelectorAll('.delete-doc-btn').forEach(button => {
    button.addEventListener('click', () => {
        const docId = button.getAttribute('data-doc-id');
        document.getElementById('docToDelete').value = docId;
        document.getElementById('deleteConfirmModal').style.display = 'flex';
    });
});

// Confirm delete button
document.getElementById('confirmDeleteBtn')?.addEventListener('click', () => {
    const docId = document.getElementById('docToDelete').value;
    // Here you would normally send a request to delete the document
    console.log(`Document ${docId} deleted`);
    document.getElementById('deleteConfirmModal').style.display = 'none';
    // For demo purposes, we'll just show an alert
    alert(`Document ${docId} has been deleted (demo)`);
});

// Save all changes button
document.getElementById('saveAllChanges')?.addEventListener('click', () => {
    const userData = {
        name: document.getElementById('userName').value,
        address: document.getElementById('userAddress').value,
        course: document.getElementById('userCourse').value,
        studentId: document.getElementById('userStudentId').value
    };
    
    // Here you would normally send this data to your backend
    console.log('Saving user data:', userData);
    alert('All changes saved successfully! (demo)');
});

// Handle photo upload
document.getElementById('changePhotoForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('uploadPhotoFile');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
        document.getElementById('changePhotoModal').style.display = 'none';
        alert('Profile photo updated! (demo)');
    }
});

// Handle document upload
document.getElementById('uploadDocForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would normally handle the file upload
    const title = document.getElementById('uploadDocTitle').value;
    alert(`Document "${title}" uploaded successfully! (demo)`);
    document.getElementById('uploadDocModal').style.display = 'none';
    // Reset form
    this.reset();
});

// Handle document edit form
document.getElementById('editDocForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const docId = document.getElementById('editDocId').value;
    const title = document.getElementById('editDocTitle').value;
    alert(`Document ${docId} ("${title}") updated successfully! (demo)`);
    document.getElementById('editDocModal').style.display = 'none';
    // Reset form
    this.reset();
});
