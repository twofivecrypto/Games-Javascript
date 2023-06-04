

function fetchIssues () {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML +=   '<div class="well">'+
    '<h6>Issue ID: ' + id + '</h6>'+
    '<p><span class="label label-info">' + status + '</span></p>'+
    '<h3>' + desc + '</h3>'+
    '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' '+
    '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
    '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
    '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
    '</div>';
}

document.getElementById('issueInputForm').addEventListener('submit', saveIssue);
document.getElementById('issueInputForm').reset();

function saveIssue(e) {
    var issueID = chance.guid();
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueStatus = 'Open';

    var issue = {
        id: issueID,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if (localStorage.getItem('issues') === null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issues);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    fetchIssues();
    e.preventDefault();
}
