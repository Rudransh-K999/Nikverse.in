import { JobRole } from '../data/careersData';

export const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1542413400963944488/oDR2-FbNwGv7qNRsb9dmVSJI32YdRycBqvLtlF7OwXTROsX4E2jbYbap-iOh8uDP2HoH';

export interface JobApplicationPayload {
  role: JobRole;
  name: string;
  discordTag: string;
  email: string;
  portfolioUrl: string;
  experienceNotes: string;
  applicationId: string;
}

export interface ContactMessagePayload {
  name?: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Sends a rich Discord Embed to the server webhook when an applicant applies for a role.
 */
export async function sendJobApplicationToDiscord(
  data: JobApplicationPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const { role, name, discordTag, email, portfolioUrl, experienceNotes, applicationId } = data;

    const embedPayload = {
      embeds: [
        {
          title: `📋 New Candidate Submission • ${role.title}`,
          description: `A new candidate application has been submitted via **R-Link Applications**.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
          color: 0xf59e0b, // Amber-500 (#f59e0b)
          fields: [
            {
              name: '🎯 Position Applied',
              value: `**Role:** ${role.title}\n**Department:** ${role.category || 'Creative Team'}\n**Job Type:** ${role.type || 'Contract / Remote'}\n**Compensation:** ${role.compensation || 'Competitive'}`,
              inline: false
            },
            {
              name: '👤 Candidate Profile',
              value: `**Full Name:** ${name || 'Not provided'}\n**Discord Tag:** \`${discordTag}\`\n**Email:** ${email || 'Not provided'}`,
              inline: true
            },
            {
              name: '🆔 Verification & Details',
              value: `**Application ID:** \`${applicationId}\`\n**Terms & Rules:** ✅ Confirmed\n**Review Status:** 🟡 Pending Review`,
              inline: true
            },
            {
              name: '🔗 Portfolio / Work Reel Link',
              value: portfolioUrl
                ? `[🌐 Click Here to Open Portfolio / Reel](${portfolioUrl})\n\`${portfolioUrl}\``
                : '*No portfolio link provided.*',
              inline: false
            },
            {
              name: '📝 Introduction & Software Experience',
              value: experienceNotes.trim()
                ? experienceNotes.length > 1000
                  ? `>>> ${experienceNotes.slice(0, 990)}...`
                  : `>>> ${experienceNotes}`
                : '*No additional notes provided by applicant.*',
              inline: false
            }
          ],
          thumbnail: role.image ? { url: role.image } : undefined,
          footer: {
            text: '- TEAM Nikverse • Powered by R-Link Applications'
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(embedPayload)
    });

    if (!response.ok && response.status !== 204) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('Failed to post to Discord webhook:', response.status, errorText);
      return { success: false, error: `Webhook error: ${response.status}` };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error('Error dispatching Discord webhook:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Network error connecting to webhook'
    };
  }
}

/**
 * Sends a rich Discord Embed when someone sends a business inquiry / contact form message.
 */
export async function sendContactMessageToDiscord(
  data: ContactMessagePayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const { email, subject, message, name } = data;

    const embedPayload = {
      embeds: [
        {
          title: `📬 New Sponsor & Business Inquiry`,
          description: `A new message was submitted through **R-Link Applications**.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
          color: 0x3b82f6, // Blue-500
          fields: [
            {
              name: '👤 Sender Information',
              value: `**Email:** ${email || 'Not provided'}\n${name ? `**Name:** ${name}\n` : ''}**Subject:** ${subject || 'General / Sponsorship Inquiry'}`,
              inline: false
            },
            {
              name: '💬 Inquiry Message',
              value: message.trim()
                ? message.length > 1000
                  ? `>>> ${message.slice(0, 990)}...`
                  : `>>> ${message}`
                : '*Empty message*',
              inline: false
            }
          ],
          footer: {
            text: '- TEAM Nikverse • Powered by R-Link Applications'
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(embedPayload)
    });

    if (!response.ok && response.status !== 204) {
      return { success: false, error: `Webhook error: ${response.status}` };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error('Error dispatching contact webhook:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Network error'
    };
  }
}
