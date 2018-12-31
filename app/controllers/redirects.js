module.exports = {
    index: (req, res) => res.redirect('/'),
    goneWrong: (req, res) => res.redirect('/somethings-gone-wrong'),
    adminDashboard: (req, res) => res.redirect('/admin/dashboard'),
    adminExistingCase: (req, res) => res.redirect(`/admin/existing-case/${req.params.id}`)
};
