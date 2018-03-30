$( document ).ready( function()
{
	$( '#kenny' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
} );