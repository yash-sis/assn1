$(document).ready(function() {
    // Add smooth scrolling to all links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
    });

    // Add animation to skill tags
    $('.skill-tag').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
            $(this).css('background-color', '#2563eb');
            $(this).css('color', 'white');
        },
        function() {
            $(this).css('transform', 'scale(1)');
            $(this).css('background-color', '#e5e7eb');
            $(this).css('color', '#333');
        }
    );

    // Add fade-in animation to sections
    $('.resume-section, .bio-section').each(function(i) {
        $(this).css('opacity', '0');
        $(this).delay(i * 200).animate({
            opacity: 1
        }, 500);
    });
});