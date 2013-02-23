class CRect{
	int			left		= 0;
	int			top			= 0;
	int			right		= 0;
	int			bottom		= 0;
	CRect( int posx, int posy, int cx, int cy ) {
		this.left 	= posx;
		this.top 	= posy;
		this.right 	= posx + cx;
		this.bottom = posy + cy;
	}
}
