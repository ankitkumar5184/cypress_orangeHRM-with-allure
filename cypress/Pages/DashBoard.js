class DashBoard{
    PIE_CHART= 'div[id="hover_div_graph_display_emp_distribution"]'
    goToChart(){
        cy.get(this.PIE_CHART).trigger('mousemove',{force: true}).should('be.visible')
    }
}
export default DashBoard