<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns:fo="http://www.w3.org/1999/XSL/Format"
                version="1.0">
	
<xsl:output method="text" indent="yes"/>
<xsl:template match="article">
    <xsl:apply-templates select="sect1/informaltable/tgroup/tbody/row"/>
</xsl:template>

<xsl:template match="row">
<xsl:if test="entry[3]/para/emphasis/@role = 'bold'">
<xsl:text>
// Frame </xsl:text><xsl:value-of select="entry[1]/para"/><xsl:text>
</xsl:text>

<xsl:text>/* </xsl:text>
<xsl:value-of select="normalize-space(entry[2]/para)"/>
<xsl:text>*/
</xsl:text>
    
<xsl:apply-templates select="entry[2]/figure"/>
<xsl:apply-templates select="entry[3]/para[emphasis/@role ='bold']"/>

</xsl:if>
</xsl:template>

<xsl:template match="figure">
<xsl:text>// </xsl:text><xsl:value-of select="title"/><xsl:text>
</xsl:text>
<xsl:text>diagram, {image:"</xsl:text>
<xsl:value-of select="graphic/@fileref"/>
<xsl:text>"},
</xsl:text>
</xsl:template>

<xsl:template match="para">
    <xsl:variable name="speaker" select="translate(emphasis,
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ:','abcdefghijklmnopqrstuvwxyz')"/>
    <xsl:value-of select="$speaker"/><xsl:text>, "</xsl:text>
    <xsl:value-of select="normalize-space(emphasis/following-sibling::text())"/>
    <xsl:text>",
</xsl:text>
</xsl:template>

</xsl:stylesheet>
