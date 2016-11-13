class L6_11
{
   int[] rl = new int[6];
   int wp = 0;

   public void shengchan(int aa)
   {
	   rl[wp] = aa;
	   ++wp;
   }

   public void xiaofei()
   {
	   int dd = rl[wp-1];
	   --wp;	   
   }
}