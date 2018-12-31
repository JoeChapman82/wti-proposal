module.exports = {
    index: (req, res) => res.render('login'),
    notFound: (req, res) => res.render('404'),
    goneWrong: (req, res) => res.render('somethings-gone-wrong'),
    adminDashboard: (req, res) => res.render('admin/dashboard'),
    adminNewCase: (req, res) => res.render('admin/new-case'),
    adminBulkUpload: (req, res) => res.render('admin/bulk-upload'),
    adminExistingCases: (req, res) => res.render('admin/existing-cases'),
    adminVetinaryRecords: (req, res) => res.render('admin/vetinary-records'),
    adminHusbandryRecords: (req, res) => res.render('admin/husbandry-records'),
    adminExistingCase: (req, res) => res.render('admin/existing-case'),
    adminViewUsers: (req, res) => res.render('admin/view-users'),
    adminSearch: (req, res) => res.render('admin/search'),
    adminSearchResults: (req, res) => res.render('admin/search-results'),
    adminSettings: (req, res) => res.render('admin/settings')
};
